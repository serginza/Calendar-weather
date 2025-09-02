import { lazy, memo, type ReactElement, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ROOT } from 'shared/constants';
import { DotsLoader } from 'shared/ui';

const MainPage = lazy(
  () =>
    import(/* ChunkName: "pages/MainPage/MainPage" */ 'pages/MainPage/MainPage')
);

function SuspenseWrapper(page: ReactElement) {
  return <Suspense fallback={<DotsLoader />}>{page}</Suspense>;
}

function MainRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROOT} element={SuspenseWrapper(<MainPage />)} />
      </Routes>
    </HashRouter>
  );
}

export const InnerRoutes = memo(MainRoutes);
