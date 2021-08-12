import React, { FC, Suspense } from 'react';
import PreLoader from './pages/PreLoader';

const AppRouter = React.lazy(() => import('./AppRouter'));

const App: FC = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
