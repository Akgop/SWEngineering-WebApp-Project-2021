const CollapseNav = () => {
    return (
        <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
            <div class="container py-2 py-md-5">
                <div class="row align-items-start">
                    <div class="col-md-2">
                        <ul class="custom-menu">
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Me</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="works.html">Works</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 d-none d-md-block  mr-auto">
                        <div class="tweet d-flex">
                            <span class="bi bi-twitter text-white mt-2 mr-3"></span>
                            <div>
                                <p>
                                    <em>Text Here
                                        <a href="#">Link here</a>
                                    </em></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-none d-md-block">
                        <h3>Hire Me</h3>
                        <p>plicabo inventore.  <a href="#">myemail@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollapseNav;

