import BlogSidebar from '../components/elements/BlogSidebar';
import BlogSingle from '../components/elements/BlogSingle';
import Layout from "../components/layout/Layout";
import Link from "next/link";

function WholesaleMembership() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Coupons">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div class="card m-4">
                            <div class="card-header">
                                10%
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">With order of $25.00</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" class="btn btn-primary mt-3">Copy: 987654</a>
                            </div>
                        </div>
                        <div class="card m-4">
                            <div class="card-header">
                                10%
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">With order of $25.00</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" class="btn btn-primary mt-3">Copy: 987654</a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default WholesaleMembership;
