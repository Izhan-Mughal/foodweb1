import Link from "next/link";
import React from "react";


const BlogSidebar = () => {
    return (
        <>
            <div className="widget-area">
                
                

                <div className="sidebar-widget product-sidebar mb-50 p-30 bg-grey border-radius-10">
                    
                    <div className="single-post clearfix">
                        <div className="image">
                            <img src="/assets/imgs/shop/thumbnail-4.jpg" alt="#" />
                        </div>
                        <div className="content pt-10">
                            <h6><Link href="/products"><a>Chen Sweater</a></Link></h6>
                            <p className="price mb-0 mt-5">$89.50</p>
                            <div className="product-rate">
                                <div className="product-rating" style={{ "width": "80%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="single-post clearfix">
                        <div className="image">
                            <img src="/assets/imgs/shop/thumbnail-5.jpg" alt="#" />
                        </div>
                        <div className="content pt-10">
                            <h6><Link href="/products"><a>Colorful Jacket</a></Link></h6>
                            <p className="price mb-0 mt-5">$25</p>
                            <div className="product-rate">
                                <div className="product-rating" style={{ "width": "60%" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="single-post clearfix">
                        <div className="image">
                            <img src="/assets/imgs/shop/thumbnail-6.jpg" alt="#" />
                        </div>
                        <div className="content pt-10">
                            <h6><Link href="/products"><a>Lorem, ipsum</a></Link></h6>
                            <p className="price mb-0 mt-5">$25</p>
                            <div className="product-rate">
                                <div className="product-rating" style={{ "width": "60%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="banner-img wow fadeIn mb-50 animated d-lg-block d-none">
                    <img src="/assets/imgs/banner/banner-11.png" alt="" />
                    <div className="banner-text">
                        <span>Oganic</span>
                        <h4>
                            Save 17% <br />
                            on <span className="text-brand">Oganic</span><br />
                            Juice
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;
