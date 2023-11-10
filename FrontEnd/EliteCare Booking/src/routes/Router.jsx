import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import ServicesPage from "../pages/ServicesPage.jsx";
import DoctorsPage from '../pages/DoctorsPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import SignUpPage from '../pages/SignUpPage.jsx';
import MyAccount from '../user-account/MyAccount.jsx';
import ApptPage from '../pages/ApptPage.jsx';
// import ProtectedRoute from './ProtectedRoute.jsx';
// ^ add in protected route

const Router = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="users/profile/me" element={<MyAccount />} />
        <Route path="/bookappointment" element={<ApptPage />} />
    </Routes>
}

export default Router;