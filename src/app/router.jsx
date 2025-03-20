import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './home/Home';
import SearchPage from './search';
import HotelDetails from './hotel-details';
import { SignInPage, SignUpPage } from './auth';
import PATHS from '@/config/path.config';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATHS.SEARCH} element={<SearchPage />} />
        <Route path={PATHS.HOTEL} element={<HotelDetails />} />

        <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />
        <Route path={PATHS.SIGN_IN} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
