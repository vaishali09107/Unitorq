import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
const HomeOne = lazy(() => import("./pages/HomeOne"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));



function App() {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])
  return (
      <Router>
        <NavScrollTop>
          <Suspense fallback={<div />}>
                <Routes>
                  <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<HomeOne/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-one"}`} element={<HomeOne/>}/>
                
                  <Route path={`${process.env.PUBLIC_URL + "/work-details"}`} element={<WorkDetails/>} />
                  </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
  );
}

export default App;
