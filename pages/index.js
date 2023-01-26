import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import FeatchTab from "../components/ecommerce/fetchTab";
import FetchTabSlider from "../components/ecommerce/fetchTabSlider";
import Bottom from "../components/elements/Bottom";
import QuickView from "./../components/ecommerce/QuickView";
import Banner5 from "./../components/elements/Banner5";
import Deals1 from "./../components/elements/Deals1";
import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Intro1 from "./../components/sliders/Intro1";
import Link from "next/link";
import CategoryProduct from "../components/ecommerce/Filter/CategoryProduct";
import PriceRangeSlider from "./../components/ecommerce/Filter/PriceRangeSlider";
import SizeFilter from "./../components/ecommerce/Filter/SizeFilter";
import VendorFilter from "./../components/ecommerce/Filter/VendorFilter";



import CategorySlider2 from './../components/sliders/Category2';
import Intro2 from "./../components/sliders/Intro2";
import CountryProduct from "../components/elements/CountryProduct";


export default function Home() {
    return (
        <>
            <IntroPopup />

            <Layout noBreadcrumb="d-none">
                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-30">
                            <Intro1 />
                        </div>
                    </div>
                </section>

                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                          <CountryProduct/>
                        </div>
                        <div className="col-lg-1-5 primary-sidebar sticky-sidebar pt-30">
                            <div className="sidebar-widget widget-category-2 mb-30">
                                <h5 className="section-title style-1 mb-30">
                                    Filter
                                </h5>
                                <CategoryProduct />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="col-lg-12">
                            <CategoryTab />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
