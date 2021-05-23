import { Link } from 'react-router-dom';

const CollapseNav = () => {
    return (
        <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
            <div class="container py-2 py-md-5">
                <div class="row align-items-start">
                    <div class="col-md-2">
                        <ul class="custom-menu">
                            <li><Link to="/home">Home</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 float-right">
                        <ul class="custom-menu">
                            <li><Link to='/'>Anything</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <ul class="custom-menu">
                            <li><Link to="/home">Anything</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <ul class="custom-menu">
                            <li><Link to='/home'>Anything</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 float-right">
                        <ul class="custom-menu">
                            <li><Link to='/about'>About Us</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 float-right">
                        <ul class="custom-menu">
                            <li><Link to='/MyPage'>My Page</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollapseNav;

