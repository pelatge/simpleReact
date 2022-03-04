import { hot } from 'react-hot-loader/root';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import {Home,Blogs,About,ReduxView,ViewApi} from './Pages';

function App(){
   return (
      <>
      <Router>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="reduxview" element={<ReduxView />}/>
        <Route path="viewapi" element={<ViewApi />}/>
      </Route>
      </Routes>
      </Router>
      </>
    );
  
}


function Layout() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars">==</i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            simpleReact
          </Link>
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <li className="items-center">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">About</Link>
          </li>
          <li>
            <Link to="/reduxview">Redux</Link>
          </li>
          <li>
            <Link to="/viewapi">Axios</Link>
          </li>
        </ul>
        </div>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


export default hot(App);
