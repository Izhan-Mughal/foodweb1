import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { server } from "../../config/index";
import { findProductIndex } from "../../util/util";
import { useRouter } from 'next/router';
import ErrorPage from 'next/error'

const ProductId = ({ product }) => {
    // const router = useRouter()
    // if (!router.isFallback && !product) {
    //     return <ErrorPage statusCode={404} />
    // }
    return (
        <>
        <Layout parent="Home" sub="Shop">
            <div className="container">
                
            </div>
        </Layout>
        </>
    );
};



// ProductId.getInitialProps = async (params) => {
    
//     const request = await fetch(`${server}/static/product.json`);
//     const data = await request.json();

//     const index = findProductIndex(data, params.query.slug);
//     // console.log(params);

//     return { product: data[index] };
// };

export default ProductId;
