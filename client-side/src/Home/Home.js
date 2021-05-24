import Navbar from '../Components/Navbar';
import Product from '../Sections/Product';
import CollapseNav from '../Components/CollapseNav';
import Footer from '../Components/Footer';

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