import "./styles.css";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Header from "./components/Header";
import "antd/dist/antd.css";
import { Layout } from "antd";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./pages/page1";
import PageTwo from "./pages/page2";
import PageThree from "./pages/page3";
import './utils/stringMethod';

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
