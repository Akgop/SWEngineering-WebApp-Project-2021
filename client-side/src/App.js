import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Product from './Sections/Product';
import CollapseNav from './Navbar/CollapseNav';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <div className="App">
            <CollapseNav></CollapseNav>
            <Navbar></Navbar>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
}

export default App;
