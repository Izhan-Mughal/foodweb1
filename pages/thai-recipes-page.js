import React from 'react'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ShowSelect from "../components/ecommerce/Filter/ShowSelect";
import SortSelect from "../components/ecommerce/Filter/SortSelect";
import CategoryProduct from "../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "../components/ecommerce/Filter/PriceRangeSlider";
import VendorFilter from "../components/ecommerce/Filter/VendorFilter";
import Pagination from "../components/ecommerce/Pagination";
import SingleProduct from "../components/ecommerce/SingleProduct";
import Layout from "../components/layout/Layout";
import { fetchProduct } from "../redux/action/product";
import BlogSingle from '../components/elements/BlogSingle';
import Link from "next/link";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app



const ThairecipesPage = ({ products, productFilters, fetchProduct }) => {

    const [imgView, setimgView] = useState(false)
    let Router = useRouter(),
        searchTerm = Router.query.search,
        showLimit = 5,
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
    return (
        <Layout noBreadcrumb="d-none">
            <section className="mt-50 mb-50">
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                            <div className="shop-product-fillter">
                                <div className="totall-product">
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
                            <div className='w-100 my-3'>
                                <div>
                                    <img src="assets/imgs/blog/thai-recipe.jpg" className='w-50' style={{ borderRadius: 20 }} alt="image" />
                                </div>
                                <div className='py-3'>
                                    <h1 className='heading-font-thai-recipe' style={{ color: "#000" }}>Description:</h1>
                                    <p className='sub-heading-font-thai-recipe font-weight-bold fs-4' style={{ color: "#000", lineHeight: 1.5, textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quae reiciendis natus dignissimos provident, recusandae illo amet veritatis eaque harum eius assumenda aperiam aspernatur cupiditate molestias, deserunt enim animi sit.</p>
                                    <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolores est corrupti maiores nulla voluptatum quasi dolorum, quos porro nostrum assumenda quisquam at reprehenderit amet numquam aut accusamus iusto rem.
                                        Qui enim nostrum dolore quia veniam quos ipsam repudiandae, ex atque molestias rem, cum, numquam ab delectus illum tempora non corrupti optio quas. Debitis accusantium corporis repellat rerum? Ex, ipsa.
                                        Laudantium harum dignissimos asperiores commodi dicta incidunt excepturi, nobis labore deleniti? Fugit consequatur quis facere ullam modi mollitia exercitationem aliquid corporis culpa adipisci maiores atque distinctio eaque, libero ut. Sint.
                                        Cum consequuntur, totam ducimus aperiam velit illum ullam, vel optio dolores maxime corrupti corporis numquam vitae illo magni similique quasi? Iure delectus praesentium adipisci perspiciatis. Vitae ipsum exercitationem distinctio doloremque!
                                        Ea, in dignissimos harum voluptatem repudiandae corporis illum nisi ratione dolor sit possimus recusandae rerum impedit officiis, molestias rem, ab eum expedita excepturi ipsam quia! Provident debitis sapiente culpa enim.</p>
                                </div>
                                <div className='row py-3'>
                                    <figure className="single-thumbnail col-lg-6">
                                        <video controls className='w-100 h-100'>
                                            <source src="/test.mp4" type="video/mp4" />
                                        </video>
                                    </figure>
                                    <figure className="single-thumbnail col-lg-6">
                                        <img src="/assets/imgs/blog/blog-19.png" className='w-100 h-100' alt="" />
                                    </figure>
                                </div>
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
                    <div className="container custom">
                        <div className="row">
                            <div className="m-auto">
                                <div className=''>
                                    <div className="single-content">
                                        <div className="row">
                                            <div className="m-auto">
                                                <p className="single-excerpt">
                                                    Helping everyone live happier, healthier lives
                                                    at home through their kitchen. Kitchn is a daily
                                                    food magazine on the Web celebrating life in the
                                                    kitchen through home cooking and kitchen
                                                    intelligence.
                                                </p>
                                                <p>
                                                    We've reviewed and ranked all of the best
                                                    smartwatches on the market right now, and we've
                                                    made a definitive list of the top 10 devices you
                                                    can buy today. One of the 10 picks below may
                                                    just be your perfect next smartwatch.
                                                </p>
                                                <p>
                                                    Those top-end wearables span from the Apple
                                                    Watch to Fitbits, Garmin watches to
                                                    Tizen-sporting Samsung watches. There's also
                                                    Wear OS which is Google's own wearable operating
                                                    system in the vein of Apple's watchOS - you’ll
                                                    see it show up in a lot of these devices.
                                                </p>
                                                <h5 className="mt-50">
                                                    Lorem ipsum dolor sit amet cons
                                                </h5>
                                                <p>
                                                    Throughout our review process, we look at the
                                                    design, features, battery life, spec, price and
                                                    more for each smartwatch, rank it against the
                                                    competition and enter it into the list you'll
                                                    find below.
                                                </p>

                                                <p>
                                                    Tortor, lobortis semper viverra ac, molestie
                                                    tortor laoreet amet euismod et diam quis aliquam
                                                    consequat porttitor integer a nisl, in faucibus
                                                    nunc et aenean turpis dui dignissim nec
                                                    scelerisque ullamcorper eu neque, augue quam
                                                    quis lacus pretium eros est amet turpis nunc in
                                                    turpis massa et eget facilisis ante molestie
                                                    penatibus dolor volutpat, porta pellentesque
                                                    scelerisque at ornare dui tincidunt cras feugiat
                                                    tempor lectus
                                                </p>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit. Amet id enim, libero sit. Est
                                                    donec lobortis cursus amet, cras elementum
                                                    libero convallis feugiat. Nulla faucibus
                                                    facilisi tincidunt a arcu, sem donec sed sed.
                                                    Tincidunt morbi scelerisque lectus non. At leo
                                                    mauris, vel augue. Facilisi diam consequat amet,
                                                    commodo lorem nisl, odio malesuada cras. Tempus
                                                    lectus sed libero viverra ut. Facilisi rhoncus
                                                    elit sit sit.
                                                </p>

                                                <ul>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                    <li>Ingredient 1</li>
                                                </ul>




                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="table-responsive shopping-summery">

                                <table className={1 > 0 ? "table table-wishlist" : "d-none"} >
                                    <thead>
                                        <tr className="main-heading">
                                            <th className="custome-checkbox start pl-30" colSpan="2">
                                                Product
                                            </th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="image product-thumbnail" onClick={() => setimgView(true)}>
                                                <img src="/assets/imgs/shop/product-1-1.jpg" />
                                                {imgView && (
                                                    <Lightbox mainSrc="assets/imgs/shop/product-1-1.jpg" onCloseRequest={() => setimgView(false)} />
                                                )}
                                            </td>

                                            <td className="product-des product-name">
                                                <h6 className="product-name">
                                                    <Link href="/products">
                                                        <a>
                                                            Achi Tomato Garlic
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{
                                                                width: "90%",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted">
                                                        {" "}
                                                        (4.0)
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                className="price"
                                                data-title="Price"
                                            >
                                                <h4 className="text-brand">
                                                    $20.00
                                                </h4>
                                            </td>
                                            <td
                                                className="text-center detail-info"
                                                data-title="Stock"
                                            ><div className="detail-extralink mr-15">
                                                    <div className="detail-qty border radius ">
                                                        <a

                                                            className="qty-down"
                                                        >
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </a>
                                                        <span className="qty-val">
                                                            2
                                                        </span>
                                                        <a

                                                            className="qty-up"
                                                        >
                                                            <i className="fi-rs-angle-small-up"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="image product-thumbnail" onClick={() => setimgView(true)}>
                                                <img src="/assets/imgs/shop/product-1-1.jpg" />
                                                {imgView && (
                                                    <Lightbox mainSrc="assets/imgs/shop/product-1-1.jpg" onCloseRequest={() => setimgView(false)} />
                                                )}
                                            </td>

                                            <td className="product-des product-name">
                                                <h6 className="product-name">
                                                    <Link href="/products">
                                                        <a>
                                                            Achi Tomato Garlic
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{
                                                                width: "90%",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted">
                                                        {" "}
                                                        (4.0)
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                className="price"
                                                data-title="Price"
                                            >
                                                <h4 className="text-brand">
                                                    $20.00
                                                </h4>
                                            </td>
                                            <td
                                                className="text-center detail-info"
                                                data-title="Stock"
                                            ><div className="detail-extralink mr-15">
                                                    <div className="detail-qty border radius ">
                                                        <a

                                                            className="qty-down"
                                                        >
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </a>
                                                        <span className="qty-val">
                                                            2
                                                        </span>
                                                        <a

                                                            className="qty-up"
                                                        >
                                                            <i className="fi-rs-angle-small-up"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="image product-thumbnail" onClick={() => setimgView(true)}>
                                                <img src="/assets/imgs/shop/product-1-1.jpg" />
                                                {imgView && (
                                                    <Lightbox mainSrc="assets/imgs/shop/product-1-1.jpg" onCloseRequest={() => setimgView(false)} />
                                                )}
                                            </td>

                                            <td className="product-des product-name">
                                                <h6 className="product-name">
                                                    <Link href="/products">
                                                        <a>
                                                            Achi Tomato Garlic
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="product-rate-cover">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{
                                                                width: "90%",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted">
                                                        {" "}
                                                        (4.0)
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                className="price"
                                                data-title="Price"
                                            >
                                                <h4 className="text-brand">
                                                    $20.00
                                                </h4>
                                            </td>
                                            <td
                                                className="text-center detail-info"
                                                data-title="Stock"
                                            ><div className="detail-extralink mr-15">
                                                    <div className="detail-qty border radius ">
                                                        <a

                                                            className="qty-down"
                                                        >
                                                            <i className="fi-rs-angle-small-down"></i>
                                                        </a>
                                                        <span className="qty-val">
                                                            2
                                                        </span>
                                                        <a

                                                            className="qty-up"
                                                        >
                                                            <i className="fi-rs-angle-small-up"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-heading btn-block hover-up">
                                Add to cart
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
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
export default connect(mapStateToProps, mapDidpatchToProps)(ThairecipesPage);
