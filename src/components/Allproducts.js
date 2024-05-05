import { Container } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchProducts } from "../slices/productSlice"
import { Link } from "react-router-dom"
import { addToCart } from "../slices/cartSlice"
import { CatContext } from "../context/CatContext"
import { products } from "../data/products"
import "../styles/allProducts.scss"



let Allproducts = () => {


    let product = useSelector((state) => state.product)
    const dispatch = useDispatch()
    let { catFunction, num, updateHeight, cat, setCat, products, increaseHeight, showClear } = useContext(CatContext)


    return (

        <Container>
            <div className="split">
                {/* Start Category Part  */}
                <div className="category">
                    <h2>Category</h2>
                    <br />
                    <h4>Type:</h4>
                    <div className="category-container">
                        <span>
                            <input onClick={() => catFunction("T-shirts")} type="radio" id="T-shirts" name="category" value="Tshirt" />
                            <label for="T-shirts">T-shirts</label>
                        </span>
                        <span>
                            <input onClick={() => catFunction("Jackets")} type="radio" id="Jackets" name="category" value="Jackets" />
                            <label for="Jackets">Jackets</label>
                        </span>
                        <span>
                            <input onClick={() => catFunction("Pants")} type="radio" id="Pants" name="category" value="Pants" />
                            <label for="Pants">Pants</label>
                        </span>
                        <span>
                            <input onClick={() => catFunction("Shoes")} type="radio" id="Shoes" name="category" value="Shoes" />
                            <label for="Shoes">Shoes</label>
                        </span>
                        <span>
                            <input onClick={() => setCat(products)} type="radio" id="All" name="category" value="All" />
                            <label for="All">All</label>
                        </span>

                    </div>
                </div >
                {/* End Category Part */}
                <div className="allProducts">
                    <h2>All products</h2>
                    <div className="products-container">
                        {cat.map(item =>
                            <div key={item.id} className='products-box'>
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
                </div>
            </div>

        </Container>

    )

}

export default Allproducts

