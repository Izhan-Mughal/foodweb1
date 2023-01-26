import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ShowSelect from "../components/ecommerce/Filter/ShowSelect";
import SortSelect from "../components/ecommerce/Filter/SortSelect";
import Breadcrumb2 from "../components/layout/Breadcrumb2";
import CategoryProduct from "./../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "./../components/ecommerce/Filter/PriceRangeSlider";
import VendorFilter from "./../components/ecommerce/Filter/VendorFilter";
import Pagination from "./../components/ecommerce/Pagination";
import SingleProduct from "../components/ecommerce/SingleProduct"
import Layout from "../components/layout/Layout";
import { fetchProduct } from "./../redux/action/product";
import Modal from 'react-bootstrap/Modal';  


const WholesaleMembership = ({ products, productFilters, fetchProduct }) => {

    let Router = useRouter(),
    searchTerm = Router.query.search,
    showLimit = 12,
    showPagination = 4;

let [pagination, setPagination] = useState([]);
let [limit, setLimit] = useState(showLimit);
let [pages, setPages] = useState(Math.ceil(products.items.length / limit));
let [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
    fetchProduct(searchTerm, "/static/product.json", productFilters);
    cratePagination();
}, [productFilters, limit, pages, products.items.length]);

const cratePagination = () => {
    // set pagination
    let arr = new Array(Math.ceil(products.items.length / limit))
        .fill()
        .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(products.items.length / limit));
};

const startIndex = currentPage * limit - limit;
const endIndex = startIndex + limit;
const getPaginatedProducts = products.items.slice(startIndex, endIndex);

let start = Math.floor((currentPage - 1) / showPagination) * showPagination;
let end = start + showPagination;
const getPaginationGroup = pagination.slice(start, end);

const next = () => {
    setCurrentPage((page) => page + 1);
};

const prev = () => {
    setCurrentPage((page) => page - 1);
};

const handleActive = (item) => {
    setCurrentPage(item);
};

const selectChange = (e) => {
    setLimit(Number(e.target.value));
    setCurrentPage(1);
    setPages(Math.ceil(products.items.length / Number(e.target.value)));
};

const [show, setShow] = useState(false);
function handleShow() {
  setShow(true);
}
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Wholesale Membership">
                <section className="mt-0 mb-20">
                    <div className="container custom">
                        <div className="comment-form pt-0">
                          <button onClick={() => handleShow()} className="wholse-register-btn">Wholesale Register</button>
                          <h3 className="mb-15">Wholesale Membership Form</h3>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                <div className="row flex-row-reverse">
                            <div className="col-lg-4-5">
                                <div className="shop-product-fillter">
                                    <div className="totall-product">
                                        <p>DEAL OF THE WEEK</p>
                                        <p>
                                            We found
                                            <strong className="text-brand">
                                                {products.items.length}
                                            </strong>
                                            items for you!
                                        </p>
                                    </div>
                                    <div className="sort-by-product-area">
                                        <div className="sort-by-cover mr-10">
                                            <ShowSelect
                                                selectChange={selectChange}
                                                showLimit={showLimit}
                                            />
                                        </div>
                                        <div className="sort-by-cover">
                                            <SortSelect />
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-grid">
                                    {getPaginatedProducts.length === 0 && (
                                        <h3>No Products Found </h3>
                                    )}

                                    {getPaginatedProducts.map((item, i) => (
                                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={i}>
                                            <SingleProduct product={item} />
                                            {/* <SingleProductList product={item}/> */}
                                        </div>
                                    ))}
                                </div>

                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        <Pagination
                                            getPaginationGroup={
                                                getPaginationGroup
                                            }
                                            currentPage={currentPage}
                                            pages={pages}
                                            next={next}
                                            prev={prev}
                                            handleActive={handleActive}
                                        />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                                <div className="sidebar-widget widget-category-2 mb-30">
                                    <h5 className="section-title style-1 mb-30">
                                        Category
                                    </h5>
                                    <CategoryProduct />
                                </div>

                                <div className="sidebar-widget price_range range mb-30">
                                    <h5 className="section-title style-1 mb-30">Search by</h5>

                                    <div className="price-filter">
                                        <div className="price-filter-inner">
                                            <label className="fw-900">
                                                Price Range
                                            </label>
                                            <br />
                                            <PriceRangeSlider />

                                            <br />
                                        </div>
                                    </div>

                                    <div className="list-group">
                                        <div className="list-group-item mb-10 mt-10">
                                            <label className="fw-900">
                                                Brand
                                            </label>
                                            <VendorFilter />
                                            <label className="fw-900 mt-15">
                                                Food Type
                                            </label>
                                            <select className="form-control select-active mt-2">
                                                <option value="">
                                                    Choose Food
                                                </option>
                                                <option value="AX">
                                                    Demo
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                </div>

                                <div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">
                                    <h5 className="section-title style-1 mb-30">New products</h5>
                                    <div className="single-post clearfix">
                                        <div className="image">
                                            <img
                                                src="/assets/imgs/shop/thumbnail-3.jpg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className="content pt-10">
                                            <h5>
                                                <a>Chen Cardigan</a>
                                            </h5>
                                            <p className="price mb-0 mt-5">
                                                $99.50
                                            </p>
                                            <div className="product-rate">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "90%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post clearfix">
                                        <div className="image">
                                            <img
                                                src="/assets/imgs/shop/thumbnail-4.jpg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className="content pt-10">
                                            <h6>
                                                <a>Chen Sweater</a>
                                            </h6>
                                            <p className="price mb-0 mt-5">
                                                $89.50
                                            </p>
                                            <div className="product-rate">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post clearfix">
                                        <div className="image">
                                            <img
                                                src="/assets/imgs/shop/thumbnail-5.jpg"
                                                alt="#"
                                            />
                                        </div>
                                        <div className="content pt-10">
                                            <h6>
                                                <a>Colorful Jacket</a>
                                            </h6>
                                            <p className="price mb-0 mt-5">
                                                $25
                                            </p>
                                            <div className="product-rate">
                                                <div
                                                    className="product-rating"
                                                    style={{ width: "60%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://www.obakiapp.com">
                                <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                                    <img
                                        src="/assets/imgs/banner/banner-11.png"
                                        alt=""
                                        />
                                    <div className="banner-text">
                                        <span className="text-dark font-weight-bold">Obaki</span>
                                        <h4>
                                            Need a cook to your home or<br />
                                            on{" "}
                                            <span className="text-brand">
                                                become a cook and make 
                                            </span>
                                            <br />
                                            big buck
                                        </h4>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal show={show} size="xl" onHide={() => setShow(false)}>
                <Modal.Header closeButton >
                <Modal.Title style={{color:"#000"}}>Wholesale Membership Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    <form
                                        className="form-contact comment_form mb-50"
                                        action="#"
                                        id="commentForm"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Store Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Person Contact"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control w-100"
                                                        name="comment"
                                                        id="comment"
                                                        cols="30"
                                                        rows="9"
                                                        placeholder="Address"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Province/States"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Zipcode"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Cell Phone"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="website"
                                                        id="website"
                                                        type="text"
                                                        placeholder="Years established"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="website"
                                                        id="website"
                                                        type="text"
                                                        placeholder="Type of business"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="website"
                                                        id="website"
                                                        type="text"
                                                        placeholder="Years sales"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" name="website" id="website" type="text" placeholder="Employee"/>
                                                </div>
                                            </div>
                                            <div className="col-12">    
                                             <div className="d-flex gap-3 align-items-center ps-xxl-2">
                                             <input className="input-check" style={{width:"20px"}} type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label fs-5" for="flexCheckChecked">
                                                        Are you a Obaki chef 
                                                
                                                    </label>
                                             </div>
                                                </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="button button-contactForm" >
                                                Submit
                                            </button>
                                        </div>
                    </form>
                </div>
                </Modal.Body>
                </Modal>
            </Layout>
        </>
    );
}


const mapStateToProps = (state) => ({
    products: state.products,
    productFilters: state.productFilters,
});

const mapDidpatchToProps = {
    // openCart,
    fetchProduct,
    // fetchMoreProduct,
};

export default connect(mapStateToProps, mapDidpatchToProps)(WholesaleMembership);

