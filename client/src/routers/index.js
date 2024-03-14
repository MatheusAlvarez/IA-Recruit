import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../pages/landingPage';
import Login from '../pages/Login';
import Acesso from "../pages/Acesso";
import PageNotFound from "../pages/404";

const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/acesso/:email" element={<Acesso />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);

export default Routers;