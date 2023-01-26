import BlogSidebar from '../components/elements/BlogSidebar';
import BlogSingle from '../components/elements/BlogSingle';
import Layout from "../components/layout/Layout";
import Link from "next/link";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react'
import CategoryProduct from '../components/ecommerce/Filter/CategoryProduct';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import CountryProduct from '../components/elements/CountryProduct';


function PageBlogSingle() {
    const [key, setKey] = useState('Search filter');
    const [imgView, setimgView] = useState(false)
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Recipes">
                <section className="mt-15">
                    <div className="container custom">
                        <div className="row mb-10">
                                <div className='col-lg-12 recipe-filter-drop-down'>
                                        <Tabs id="controlled-tab-filter" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                                            <Tab eventKey="Search filter" style={{background:'transparent'}} title="Search filter">
                                                    <div className='filter-button'>
                                                        <button>Thai</button>
                                                        <button>Chinese</button>
                                                        <button>Japan</button>
                                                        <button>France</button>
                                                        <button>Maxican</button>
                                                        <button>Mediterien</button>
                                                    </div>
                                            </Tab>
                                            <Tab eventKey="Dietary" title="Dietary">
                                                <div className='filter-button'>
                                                    <button>Gluten-free</button>
                                                    <button>Vegan</button>
                                                    <button>Vegetarian</button>
                                                    <button>Kosher</button>
                                                    <button>Plant-Based</button>
                                                    <button>Low -Carb</button>
                                                    <button>Mediterranean Diet</button>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Type of food" title="Type of food">
                                             <div className='filter-button'>
                                                    <button>Soup</button>
                                                    <button>Stir-fried</button>
                                                    <button>BBQ</button>
                                                    <button>la carte</button>
                                                    <button>Appetizer</button>
                                                    <button>Salad</button>
                                                    <button>Bakery</button>
                                                    <button>Desert</button>
                                                    <button>Seafoods</button>
                                                    <button>Pasta/Noodle</button>
                                                    <button>Steam</button>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Food by countries" title="Food by Countries">
                                                <div className='filter-dropdown'>
                                                  <select className="form-control select-active"><option value="">Choose Food</option><option value="AX">Soup</option><option value="AX">Stir-fried</option><option value="AX">BBQ</option><option value="AX">La carte</option><option value="AX">Appetizer</option><option value="AX">Salad</option><option value="AX">Bakery</option><option value="AX">Desert</option><option value="AX">Seafoods</option><option value="AX">Pasta/Noodle</option><option value="AX">Steam</option></select>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                </div>
                                <div className="container mt-30">
                                    <div className="row flex-row-reverse">
                                         <div className="col-lg-4-5">
                                                <CountryProduct/>
                                         </div>
                                         <div className="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                                            <div className="sidebar-widget widget-category-2 mb-30">
                                              <h5 className="section-title style-1 mb-30">
                                                Filter
                                              </h5>
                                             <CategoryProduct/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                <BlogSidebar />
                            </div> */}
                        </div>
                        <div>
                            <div className="table-responsive shopping-summery">

                                <table className={ 1 > 0 ? "table table-wishlist" : "d-none" } >
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
                                            <td className="image product-thumbnail" onClick={() => setimgView(true )}>
                                                <img src="/assets/imgs/shop/product-1-1.jpg" />
                                                {imgView && (
                                                   <Lightbox mainSrc="assets/imgs/shop/product-1-1.jpg"  onCloseRequest={() => setimgView(false)}/>
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
                                            <td className="image product-thumbnail" onClick={() => setimgView(true )}>
                                                <img src="/assets/imgs/shop/product-1-1.jpg" />
                                                {imgView && (
                                                   <Lightbox mainSrc="assets/imgs/shop/product-1-1.jpg"  onCloseRequest={() => setimgView(false)}/>
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
                                             <td className="image product-thumbnail" onClick={() => setimgView(true )}>
                                                <img src="/assets/imgs/shop/product-1-1.jpg" />
                                                {imgView && (
                                                   <Lightbox mainSrc="assets/imgs/shop/product-1-1.jpg"  onCloseRequest={() => setimgView(false)}/>
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

                </section>
            </Layout>
        </>
    );
}

export default PageBlogSingle;
