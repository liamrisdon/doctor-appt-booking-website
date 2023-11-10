
import Header from "../components/Header.jsx";
import Footer from '../components/Footer.jsx';
import Routes from "../routes/Router.jsx";

const Layout = () => {
    return <>
        <Header />
        <main>
            <Routes />
        </main>
        <Footer />
    </>

}

export default Layout;