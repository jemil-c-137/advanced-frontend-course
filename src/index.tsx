import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import '@/shared/config/i18n/i18';
import '@/app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
