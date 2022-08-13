import { Login, Messanger, Profile, Settings } from './pages';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, MESSANGER_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE } from './utils/consts';

export const authRoutes = [
  {
    path: MESSANGER_ROUTE,
    element: <Messanger />
  },
  {
    path: PROFILE_ROUTE,
    element: <Profile />
  },
  {
    path: SETTINGS_ROUTE,
    element: <Settings />
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Login />
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Login />
  }
];