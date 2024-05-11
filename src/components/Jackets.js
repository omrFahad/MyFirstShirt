import { Container } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchProducts } from "../slices/productSlice"
import { Link } from "react-router-dom"
import { addToCart } from "../slices/cartSlice"
import { products } from "../data/products"
import { CatContext } from "../context/CatContext"
import "../styles/allProducts.scss"


let Jackets = ({ data }) => {
    let product = useSelector((state) => state.product)
    let dispatch = useDispatch()
    let { CatFunction2, num, updateHeight, cat, increaseHeight, showClear } = useContext(CatContext)

    CatFunction2("Jackets")

    return (
        <Container>

            <div className="jackets">
                <div className="products-container">
                    {cat.map((item) =>
                        < div key={item.id} className='products-box' >
                            <Link to={`/single/${item.id}`} className='link-container'>
                                <div className="imgContainer">
                                    <img src={item.image} />
                                </div>
                                <h6>{item.title}</h6>
                            </Link>
                            <div className="product-buttons">
                                <div className='product-price'>${item.price}</div>
                                <svg onClick={() => { dispatch(addToCart(item)); increaseHeight(); updateHeight(`calc(120vh * ${num})`); showClear() }} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039H160zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Zm224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Z" /></svg>
                            </div>
                        </div>

                    )}
                </div>

            </div >
        </Container>

    )
}

export default Jackets