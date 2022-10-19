

import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({children}) => {
    return (
        <> 
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default Layout;