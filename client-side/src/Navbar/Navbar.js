const Navbar = () => {
    return (
        <nav class="navbar navbar-light custom-navbar">
            <div class="container">
                <a class="navbar-brand" href="index.html">Recipes for Fun.</a>
                <a href="#" class="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                    <span></span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;