const Product = () => {
    return (
        <section className="section site-portfolio">
            <div className="container">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                        <h2>완제품 목록</h2>
                        <p class="mb-0">올라오는 기능 &amp; 개지렸다.</p>
                    </div>
                    <div className="col-md-12 col-lg-6 text-start text-lg-end" data-aos="fade-up" data-aos-delay="100">
                        <div id="filters" class="filters">
                            <a href="#" data-filter="*" class="active">All</a>
                            <a href="#" data-filter=".web">부대찌개</a>
                            <a href="#" data-filter=".design">김치찌개</a>
                            <a href="#" data-filter=".branding">제육볶음</a>
                            <a href="#" data-filter=".photography">쌀국수</a>
                        </div>
                    </div>
                </div>
                <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                    <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="work-single.html" class="item-wrap fancybox">
                            <div class="work-info">
                                <h3>Boxed Water</h3>
                                <span>Web</span>
                            </div>
                            <img class="img-fluid" src="assets/img/img_1.jpg"></img>
                        </a>
                    </div>
                    <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="work-single.html" class="item-wrap fancybox">
                            <div class="work-info">
                                <h3>Build Indoo</h3>
                                <span>Photography</span>
                            </div>
                            <img class="img-fluid" src="assets/img/img_2.jpg"></img>
                        </a>
                    </div>
                    <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="work-single.html" class="item-wrap fancybox">
                            <div class="work-info">
                                <h3>Cocooil</h3>
                                <span>Branding</span>
                            </div>
                            <img class="img-fluid" src="assets/img/img_3.jpg"></img>
                        </a>
                    </div>
                    <div class="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="work-single.html" class="item-wrap fancybox">
                            <div class="work-info">
                                <h3>Nike Shoe</h3>
                                <span>Design</span>
                            </div>
                            <img class="img-fluid" src="assets/img/img_4.jpg"></img>
                        </a>
                    </div>
                    <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="work-single.html" class="item-wrap fancybox">
                            <div class="work-info">
                                <h3>Kitchen Sink</h3>
                                <span>Photography</span>
                            </div>
                            <img class="img-fluid" src="assets/img/img_5.jpg"></img>
                        </a>
                    </div>
                    <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                        <a href="work-single.html" class="item-wrap fancybox">
                            <div class="work-info">
                                <h3>Amazon</h3>
                                <span>brandingn</span>
                            </div>
                            <img class="img-fluid" src="assets/img/img_6.jpg"></img>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;
