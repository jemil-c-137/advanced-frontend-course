import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../../../entities/Profile';

const reducer: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <div>profile page</div>
    </DynamicModuleLoader>
);

export default ProfilePage;
