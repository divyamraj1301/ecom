import Layout from '../components/Layout/Layout'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "../styles/ProductDetailsStyles.css";
import { serverAPI } from '../index';

const ProductDetails = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        if (params?.slug) getProduct()
    }, [params?.slug])

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${serverAPI}/product/get-product/${params.slug}`)
            setProduct(data?.product)
            getSimilarProduct(data?.product._id, data?.product.category._id)
        } catch (error) {
            console.log(error)
        }
    }

    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(`${serverAPI}/product/related-product/${pid}/${cid}`)
            setRelatedProducts(data?.products)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Layout>
            <div className="row container product-details mt-2">
                <div className="col-md-6">
                    <img src={`${serverAPI}/product/product-photo/${product._id}`} className="card-img-top" alt={product.name} height="300px" width="350px" />
                </div>
                <div className="col-md-6">
                    <h1 className='text-center product-detail-info'>Product Details</h1>
                    <h6>Name : {product.name}</h6>
                    <h6>Description : {product.description}</h6>
                    <h6>Price : {product.price}</h6>
                    <h6>Category : {product?.category?.name}</h6>
                    <button class="btn btn-secondary ms-1">ADD TO CART</button>
                </div>
            </div>
            <hr/>
            <div className="row container">
                <h1>Similar Product</h1>
                {relatedProducts.length < 1 && (<p className='text-center'>No Similar Product Found</p>)}
                <div className="d-flex flex-wrap">
                    {relatedProducts?.map((p) => (
                        <div className="card m-2" style={{ width: "18rem" }}>
                            <img src={`${serverAPI}/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.description.substring(0, 30)}...</p>
                                <p className="card-text"> $ {p.price}</p>
                                <button className="btn btn-secondary ms-1">Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails