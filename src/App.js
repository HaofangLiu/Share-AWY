import React, { Suspense, lazy } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Loading from "./loading";
import LogoComponent from "./components/LogoComp";
import LoginComp from "./components/LoginComp";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const History = lazy(() => import("./pages/History"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <div className="app">
      <main>
        <LogoComponent />
        <LoginComp />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" exact component={History} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
