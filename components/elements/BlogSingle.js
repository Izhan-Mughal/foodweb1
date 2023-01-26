import Link from "next/link";
import React from "react";

const BlogSingle = () => {
    return (
        <>
            <div className="single-page pt-20 pr-30">
                <div className="single-header style-2">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <h6 className="mb-10">
                                <Link href="#"><a>Recipes</a></Link>
                            </h6>
                            <h2 className="mb-10">
                                Meatballs
                            </h2>

                        </div>
                    </div>
                </div>
                <figure className="single-thumbnail">
                    <video  controls>
                        <source src="/test.mp4" type="video/mp4" />
                    </video>
                </figure>
                <figure className="single-thumbnail">
                    <img src="/assets/imgs/blog/blog-19.png" alt="" />
                </figure>
                <div className="single-content">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
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
        </>
    );
};

export default BlogSingle;
