import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import PrivateRoute from 'components/routes/PrivateRoute';
import RootLayout from 'layouts/RootLayout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import AccountSettingsPage from 'pages/AccountSettingsPage';
import LogoutPage from 'pages/LogoutPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/settings" element={<AccountSettingsPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Route>
    </Route>
  )
);

export default router;
