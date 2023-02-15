import About from "pages/About";
import ErrorPage from "pages/error-page";
import Home from "pages/Home";
import { useEffect } from "react";
import { Outlet, Route, Routes, useLoaderData } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { testValue } from "recoil/posts";

const App = (): JSX.Element => {
  const test = useRecoilValue(testValue);
  useEffect(() => {
    console.log("APP", test);
  }, [test]);
  return (
    <div>
      <h1>App</h1>
      <Outlet />
    </div>
  )
}


export default App;