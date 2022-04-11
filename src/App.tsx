import "./styles.css";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Header from "./components/Header";
import "antd/dist/antd.css";
import { Layout } from "antd";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './utils/stringMethod';
import { lazy } from "react";
import withSuspense from "./HOC/withSuspense";

const PageOne = withSuspense(lazy(()=> import("./pages/page1")));
const PageTwo = withSuspense(lazy(()=> import("./pages/page2")));
const PageThree = withSuspense(lazy(()=> import("./pages/page3")));

export default function App() {
  return (
    <BrowserRouter>
      <Layout className="container">
        <ErrorBoundary>
          <SideBar />
        </ErrorBoundary>
        <Layout className="site-layout">
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <Routes>
            <Route path="/option1" element={<PageOne />}/>
            <Route path="/option2" element={<PageTwo />}/>
            <Route path="/option3" element={<PageThree />}/>
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
