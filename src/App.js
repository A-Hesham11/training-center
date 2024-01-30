import { Fragment, useLayoutEffect } from 'react';
import './App.css';
import AllRoutesProvider from './components/routing/allRoutes';
import "aos/dist/aos.css";
import { useIsRTL } from './hooks/useIsRTL';

function App() {

  const isRTL = useIsRTL()

  useLayoutEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
  }, [])

  return (
    <Fragment>
      <AllRoutesProvider />
    </Fragment>
  );
}

export default App;
