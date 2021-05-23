import Navbar from '../Navbar/Navbar';
import Product from '../Sections/Product';
import CollapseNav from '../Navbar/CollapseNav';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CollapseNav></CollapseNav>
            <Product></Product>
            <Footer></Footer>
        </div>
    )
}

export default Home;