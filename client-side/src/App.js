import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import MyPage from './MyPage/MyPage';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import { Route } from 'react-router-dom';


const App = () => {
    return (
        <div className="App">
            <Route path="/" component={Landing} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/mypage" component={MyPage} exact />
            <Route path="/login" component={Login} exact />
        </div>
    );
}

export default App;
