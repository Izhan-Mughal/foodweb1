import BlogSidebar from '../components/elements/BlogSidebar';
import BlogSingle from '../components/elements/BlogSingle';
import Layout from "../components/layout/Layout";
import Link from "next/link";

function WholesaleMembership() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Apply Credit">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="comment-form">
                            <h3 className="mb-15">Apply Credit</h3>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
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
                                                    <input
                                                        className="form-control"
                                                        name="website"
                                                        id="website"
                                                        type="text"
                                                        placeholder="Employee"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="button button-contactForm"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default WholesaleMembership;
