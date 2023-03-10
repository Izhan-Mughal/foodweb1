import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";
import { useCookies } from 'react-cookie';
import ReactFlagsSelect from "react-flags-select";

// import CountryDropdown from 'country-dropdown-with-flags-for-react';


const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'user']);
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [selected, setSelected] = useState("");
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    const handleToggle = () => setToggled(!isToggled);    

    return (
        <>
            <header className="header-area header-style-1 header-height-2 mx-1">
                <div className="mobile-promotion">
                    <span>
                        Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left 
                    </span>
                </div>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
        
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                <ul>
                                        <li>
                                            Need help? Call Us: <strong className="text-brand"> + 1800 900</strong>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a className="language-dropdown-active">
                                                    <i className="fi-rs-world"></i>
                                                    English
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            Thai
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            Vietnam
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            Cambodia
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                    {/* <ul>
                                        <li>
                                            <Link href="/page-about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/account">
                                                <a>My Account</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-wishlist">
                                                <a>Wishlist</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/account">
                                                <a>Order Tracking</a>
                                            </Link>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div id="news-flash" className="d-inline-block">
                                        <ul>
                                            <li>
                                                Get great devices up to 50% off
                                                <Link href="/shop-grid-right">
                                                    <a> View details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                {/* <div className="header-info header-info-right">
                                    <ul>
                                        <li>
                                            Need help? Call Us: <strong className="text-brand"> + 1800 900</strong>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a className="language-dropdown-active">
                                                    <i className="fi-rs-world"></i>
                                                    English
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img src="/assets/imgs/theme/flag-fr.png" alt="" />
                                                            Fran??ais
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img src="/assets/imgs/theme/flag-dt.png" alt="" />
                                                            Deutsch
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img src="/assets/imgs/theme/flag-ru.png" alt="" />
                                                            P????????????
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                     <div className="w-100 d-flex justify-content-end">
                                {/* sdaasdas */}
                     </div>
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img src="/assets/imgs/theme/logo.png" className="img-fluid" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        {/* <div className="search-location"> */}
                                        {/* </div> */}
                                        <div>
                                            <ReactFlagsSelect  customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }} placeholder="Select Language" selected={selected}  onSelect={(code)  => setSelected(code)} />
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-cart">
                                                <a className="mini-cart-icon">
                                                    <img alt="Evara" src="/assets/imgs/theme/icons/icon-cart.svg" />
                                                    <span className="pro-count blue">{totalCartItems}</span>
                                                </a>
                                            </Link>
                                            <Link href="/shop-cart">
                                                <a>
                                                    <span className="lable">Cart</span>
                                                </a>
                                            </Link>
                                        </div>
                                        {
                                            cookies.token != undefined ?
                                                <div className="header-action-icon-2">
                                                    <Link href="/account">
                                                        <a>
                                                            <img className="svgInject" alt="FoodOnline" src="/assets/imgs/theme/icons/icon-user.svg" />
                                                        </a>
                                                    </Link>
                                                    <Link href="/account">
                                                        <a>
                                                            <span className="lable ml-0">Account</span>
                                                        </a>
                                                    </Link>
                                                    
                                                </div>
                                                :
                                                <div className="header-action-icon-2">
                                                    <Link href="/login">
                                                        <a className="mini-cart-icon">
                                                            <img alt="Evara" src="/assets/imgs/theme/icons/icon-user.svg" />
                                                        </a>
                                                    </Link>
                                                    <Link href="/login">
                                                        <a>
                                                            <span className="lable">Register/Login</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                                
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={scroll ? "header-bottom header-bottom-bg-color sticky-bar stick" : "header-bottom header-bottom-bg-color sticky-bar"}>  
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img src="/assets/imgs/theme/logo.png" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a className="categories-button-active" onClick={handleToggle}>
                                        <span className="fi-rs-apps"></span>
                                        <span className="et">Browse</span> All Categories
                                        <i className="fi-rs-angle-down"></i>
                                    </a>

                                    <div className={isToggled ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open" : "categories-dropdown-wrap categories-dropdown-active-large font-heading"}>
                                        <div className="d-flex categori-dropdown-inner">
                                            <CategoryProduct2 />
                                            <CategoryProduct3 />
                                        </div>
                                        <div className="more_slide_open" style={{ display: "none" }}>
                                            <div className="d-flex categori-dropdown-inner">
                                                <ul>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-1.svg" alt="" />
                                                                Milk
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />
                                                                Clothing & beauty
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul className="end">
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />
                                                                Wines & Drinks
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                {" "}
                                                                <img src="/assets/imgs/theme/icons/icon-4.svg" alt="" />
                                                                Fresh Seafood
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="more_categories">
                                            <span className="icon"></span> <span className="heading-sm-1">Show more...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a className="active">
                                                        Home
                                                    </a>
                                                </Link>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/">
                                                            <a>Home 1</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/index-2">
                                                            <a>Home 2</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/index-3">
                                                            <a>Home 3</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/index-4">
                                                            <a>Home 4</a>
                                                        </Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li>
                                                <Link href="/recipes">
                                                    <a>Recipe</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/coupons">
                                                    <a>Coupon</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products">
                                                    <a>
                                                    Deal of the week
                                                    </a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="/products">
                                                    <a>
                                                        Healthy Products
                                                    </a>
                                                </Link>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/shop-grid-right">
                                                            <a>Organic/healthy</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Curry/Spice</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Meat</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Vegetable Fruit</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Beverage</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Sauce</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Snack</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Bakery</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Cookware</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>Other</a>
                                                        </Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li>
                                                <Link href="/wholesale-membership">
                                                    <a>Wholesale Products</a>
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link href="/page-about">
                                                    <a>Become Our Distributor</a>
                                                </Link>
                                            </li> */}
                                            {/* <li>
                                                <Link href="/page-about">
                                                    <a>Apply Credit</a>
                                                </Link>
                                            </li> */}

                                            {/* <li>
                                                <a href="#">
                                                    Vendors <i className="fi-rs-angle-down"></i>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/vendors">
                                                            <a>Vendors Grid</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/vendors-list">
                                                            <a>Vendors List</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/vendor-dashboard">
                                                            <a>Vendor Dashboard</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/vendor-guide">
                                                            <a>Vendor Guide</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="position-static">
                                                <Link href="/#">
                                                    <a>
                                                        Mega menu
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">
                                                            Fruit & Vegetables
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Meat & Poultry</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Fresh Vegetables</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Herbs & Seasonings</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cuts & Sprouts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Exotic Fruits & Veggies</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Packaged Produce</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">
                                                            Breakfast & Dairy
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Milk & Flavoured Milk</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Butter and Margarine</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Eggs Substitutes</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Marmalades</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sour Cream</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cheese</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">
                                                            Meat & Seafood
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Breakfast Sausage</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dinner Sausage</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Chicken</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Sliced Deli Meat</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Wild Caught Fillets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Crab and Shellfish</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href="#">
                                                                <img src="/assets/imgs/banner/banner-menu.png" alt="FoodOnline" />
                                                            </a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>
                                                                    Don't miss
                                                                    <br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 50%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="#">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>25%</span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-grid">
                                                    <a>
                                                        Blog
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/blog-category-grid">
                                                            <a>Blog Category Grid</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-list">
                                                            <a>Blog Category List</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-big">
                                                            <a>Blog Category Big</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-fullwidth">
                                                            <a>Blog Category Wide</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a>
                                                                Single Post
                                                                <i className="fi-rs-angle-right"></i>
                                                            </a>
                                                        </Link>
                                                        <ul className="level-menu level-menu-modify">
                                                            <li>
                                                                <Link href="/blog-post-left">
                                                                    <a>Left Sidebar</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/blog-post-right">
                                                                    <a>Right Sidebar</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/blog-post-fullwidth">
                                                                    <a>No Sidebar</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        Pages
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/page-about">
                                                            <a>About Us</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-contact">
                                                            <a>Contact</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/account">
                                                            <a>My Account</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="">
                                                            <a>login/register</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-purchase-guide">
                                                            <a>Purchase Guide</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-privacy-policy">
                                                            <a>Privacy Policy</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-terms">
                                                            <a>Terms of Service</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-404">
                                                            <a>404 Page</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>Contact</a>
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-flex">
                                <img src="/assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />

                                <p>
                                    1900 - 888<span>24/7 Support Center</span>
                                </p>
                            </div>
                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white" onClick={toggleClick}>
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img alt="Evara" src="/assets/imgs/theme/icons/icon-heart.svg" />
                                                <span className="pro-count white">{totalWishlistItems}</span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img alt="Evara" src="/assets/imgs/theme/icons/icon-cart.svg" />
                                                <span className="pro-count white">{totalCartItems}</span>
                                            </a>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img alt="Evara" src="/assets/imgs/shop/thumbnail-3.jpg" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>Plain Striola Shirts</a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 ?? </span>
                                                            $800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/shop-grid-right">
                                                            <a>
                                                                <img alt="Evara" src="/assets/imgs/shop/thumbnail-4.jpg" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/shop-grid-right">
                                                                <a>Macbook Pro 2022</a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 ?? </span>
                                                            $3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>$383.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link href="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
           
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
