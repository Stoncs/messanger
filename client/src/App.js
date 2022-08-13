import {BrowserRouter} from 'react-router-dom';
import {AppRouter} from './components/index';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
