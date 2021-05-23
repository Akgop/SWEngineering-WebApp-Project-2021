import { Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-light custom-navbar">
            <div class="container">
                <Link to="/Home" class="navbar-brand">Recipes for Fun.</Link>
                <a href="#" class="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                    <span></span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;