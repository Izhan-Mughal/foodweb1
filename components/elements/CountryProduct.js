import React from 'react'
import Link from "next/link";

const CountryProduct = () => {
  return (
    <div className="row">
    <div className="col-lg-4 col-md-6">
        <div
            className="banner-img wow animate__animated animate__fadeInUp"
            data-wow-delay="0"
        >
            <img src="/assets/imgs/banner/1.png" alt="" />
            <div className="banner-text">
                <h4>
                Thailand
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6">
        <div
            className="banner-img wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
        >
            <img src="/assets/imgs/banner/2.png" alt="" />
            <div className="banner-text">
                <h4>
                India
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 d-md-none d-lg-flex">
        <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
        >
            <img src="/assets/imgs/banner/3.png" alt="" />
            <div className="banner-text">
                <h4>
                Americans
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6">
        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0"
        >
            <img src="/assets/imgs/banner/4.png" alt="" />
            <div className="banner-text">
                <h4>
                Mexcican
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6">
        <div
            className="banner-img wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
        >
            <img src="/assets/imgs/banner/5.png" alt="" />
            <div className="banner-text">
                <h4>
                France 
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 d-md-none d-lg-flex">
        <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
        >
            <img src="/assets/imgs/banner/6.png" alt="" />
            <div className="banner-text">
                <h4>
                Chinese
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 d-md-none d-lg-flex">
        <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
        >
            <img src="/assets/imgs/banner/7.png" alt="" />
            <div className="banner-text">
                <h4>
                Mediterranean
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 d-md-none d-lg-flex">
        <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
        >
            <img src="/assets/imgs/banner/8.png" alt="" />
            <div className="banner-text">
                <h4>
                Japanese
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
    <div className="col-lg-4 d-md-none d-lg-flex">
        <div
            className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
        >
            <img src="/assets/imgs/banner/9.png" alt="" />
            <div className="banner-text">
                <h4>
                Russian
                </h4>
                <Link href="/thai-recipes-page"><a className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                </a></Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default CountryProduct