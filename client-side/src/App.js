import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import About from './Navbar/About';
import MyPage from './MyPage/MyPage';
import Landing from './Landing/Landing'
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Route path="/" component={Landing} exact />
            <Route path="/Home" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/mypage" component={MyPage} exact />
        </div>
    );
}

export default App;
