import { Route, Routes } from 'react-router';

import { AppLayout, MainLayout } from './layouts';
import Home from './pages/Home';
import Nine from './pages/Nine';
import { NineGameDashboard } from './pages/Nine/components';

import './App.css';

const App = () => {
  const RoutesComponents = () => {
    return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/nine' element={<Nine />} />
          <Route path='/nine/:gameId' element={<NineGameDashboard />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    );
  };
  return (
	  <AppLayout>
      <RoutesComponents />
	  </AppLayout>
  );
};

export default App;
