import React,{useState,useEffect} from "react";
import Layout from "./../components/layout/Layout";
import SwiperCore, { Navigation, Thumbs} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductTab from "../components/elements/ProductTab";
import RelatedSlider from "./../components/sliders/Related";
import { toast } from "react-toastify";
import CategoryProduct from "./../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "./../components/ecommerce/Filter/PriceRangeSlider";
import VendorFilter from "./../components/ecommerce/Filter/VendorFilter";



SwiperCore.use([Navigation, Thumbs]);
const productDescription = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(0);
  const [product, setgetProductDsc] = useState('')


  useEffect(() => {
    setgetProductDsc(JSON.parse(localStorage.getItem('cartDsc')))
   }, [])
  
   const [quantity, setQuantity] = useState(1);

   const handleCart = (product) => {
    // addToCart(product);
    toast("Product added to Cart !");
};

const handleCompare = (product) => {
    // addToCompare(product);
    toast("Added to Compare list !");
};

const handleWishlist = (product) => {
    // addToWishlist(product);
    toast("Added to Wishlist !");
};


    return (
        <>
              <Layout noBreadcrumb="d-none">

              <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4-5 col-lg-12">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50  mt-30">
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                        <div className="detail-gallery">
                                            <span className="zoom-icon">
                                                <i className="fi-rs-search"></i>
                                            </span>

                                            <div className="product-image-slider">
                                              {console.log(product)}
                                                <SwiperSlide> <img src={product.images?.[thumbsSwiper].img} /></SwiperSlide>
                                                <Swiper onSwiper={thumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                                                  <SwiperSlide> <img src={product.gallery?.[0].thumb} onClick={(e)=>{setThumbsSwiper(0)}} /> </SwiperSlide>
                                                  <SwiperSlide> <img src={product.gallery?.[1].thumb} onClick={(e)=>{setThumbsSwiper(1)}} /> </SwiperSlide> 
                                                  <SwiperSlide> <img src={product.gallery?.[2].thumb} onClick={(e)=>{setThumbsSwiper(0)}} /> </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info  pr-30 pl-30">
                                            <span className="stock-status out-stock"> Sale Off </span>
                                            <h2 className="title-detail">{product.title}</h2>
                                            <div className="product-detail-rating">
                                                <div className="product-rate-cover text-end">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: "90%" }}></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                                </div>
                                            </div>
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price  text-brand">${product.price}</span>
                                                    <span>
                                                        <span className="save-price font-md color3 ml-15">{product.discount?.percentage}% Off</span>
                                                        <span className="old-price font-md ml-15">{product.oldPrice ? `$ ${product.oldPrice}` : null}</span>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="short-desc mb-30">
                                                <p className="font-lg">{product.desc}</p>
                                            </div>
                                            <div className="attr-detail attr-color mb-15">
                                                <strong className="mr-10">Color</strong>
                                                <ul className="list-filter color-filter">
                                                        <li>
                                                            <a href="#" className="d-flex">
                                                                <span className={`mx-1 product-color-${product.variations?.[0]}`}></span>
                                                                <span className={`mx-1 product-color-${product.variations?.[1]}`}></span>
                                                                <span className={`mx-1 product-color-${product.variations?.[2]}`}></span>
                                                                <span className={`mx-1 product-color-${product.variations?.[3]}`}></span>
                                                                <span className={`mx-1 product-color-${product.variations?.[4]}`}></span>
                                                                <span className={`mx-1 product-color-${product.variations?.[5]}`}></span>
                                                            </a>
                                                        </li>
                                                </ul>
                                            </div>
                                            <div className="attr-detail attr-size">
                                                <strong className="mr-10">Size</strong>
                                                <ul className="list-filter size-filter font-small">
                                                    <li className="active">
                                                        <a>M</a>
                                                    </li>
                                                    <li>
                                                        <a>L</a>
                                                    </li>
                                                    <li>
                                                        <a>XL</a>
                                                    </li>
                                                    <li>
                                                        <a>XXL</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="detail-extralink">
                                                <div className="detail-qty border radius">
                                                    <a onClick={(e) => (setQuantity(quantity !== 1 ? quantity -1 : 1))} className="qty-down">
                                                        <i className="fi-rs-angle-small-down"></i>
                                                    </a>
                                                    <span className="qty-val">{quantity}</span>
                                                    <a onClick={() => (setQuantity(quantity + 1))} className="qty-up">
                                                        <i className="fi-rs-angle-small-up"></i>
                                                    </a>
                                                </div>
                                                <div className="product-extra-link2">
                                                    <button
                                                        onClick={(e) =>
                                                            handleCart({
                                                                ...product,
                                                                quantity: quantity || 1
                                                            })
                                                        }
                                                        className="button button-add-to-cart"
                                                    >
                                                        Add to cart
                                                    </button>
                                                    <a aria-label="Add To Wishlist" className="action-btn hover-up" onClick={(e) => handleWishlist(product)}>
                                                        <i className="fi-rs-heart"></i>
                                                    </a>
                                                    <a aria-label="Compare" className="action-btn hover-up" onClick={(e) => handleCompare(product)}>
                                                        <i className="fi-rs-shuffle"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="product-meta font-xs color-grey mt-20">
                                                <li className="mb-5">
                                                    SKU:
                                                    <a href="#">FWM15VKT</a>
                                                </li>
                                                <li className="mb-5">
                                                    Tags:
                                                    <a href="#" rel="tag" className="me-1">
                                                        Cloth,
                                                    </a>
                                                </li>
                                                <li>
                                                    Availability:
                                                    <span className="in-stock text-success ml-5">{product.stock} Items In Stock</span>
                                                </li>
                                            </ul>
                                            <div style={{color:'#3BB77E'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-hand-thumbs-up mx-1 fs-1" viewBox="0 0 16 16"><path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/></svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook mx-1 fs-1" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram mx-1 fs-1" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter mx-1 fs-1" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                    <>
                                        <ProductTab />
                                        <div className="row mt-60">
                                            <div className="col-12">
                                                <h3 className="section-title style-1 mb-30">Related products</h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products position-relative">
                                                    <RelatedSlider />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-sm-12 primary-sidebar sticky-sidebar">
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
            </section>
            </Layout>
        </>
    );
};



export default productDescription;
