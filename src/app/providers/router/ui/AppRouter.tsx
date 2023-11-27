import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route element={element} path={path} key={path} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
