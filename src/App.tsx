import About from "pages/About";
import ErrorPage from "pages/error-page";
import Home from "pages/Home";
import { Outlet, Route, Routes, useLoaderData } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>App</h1>
      <Outlet />
    </div>
  )
}


export default App;