import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { AppRouter } from './components/index';
import { LoadingPage } from './pages';
import { check } from './http/userApi';
import { setIsAuth, setUser } from './redux/actions/user';

function App() {
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log('check');
    check().then(data => {
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <LoadingPage />
    );
  }
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
