import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import ServicesPage from "../pages/ServicesPage.jsx";
import DoctorsPage from '../pages/DoctorsPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import SignUpPage from '../pages/SignUpPage.jsx';

const Router = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
    </Routes>
}

export default Router;