import { Fragment } from 'react';
import './App.css';
import AllRoutesProvider from './components/routing/allRoutes';
import "aos/dist/aos.css";

function App() {

  return (
    <Fragment>
      <AllRoutesProvider />
    </Fragment>
  );
}

export default App;
