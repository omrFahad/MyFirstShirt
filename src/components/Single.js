import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { products } from "../data/products"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../slices/cartSlice"
import { useState, useContext } from "react"

import { CatContext } from "../context/CatContext"

import '../styles/single.scss'

let Single = () => {

    let { id } = useParams()
    let product = useSelector((state) => state.product)
    let [qty, setQty] = useState(1)
    let dispatch = useDispatch()
    let single = products.find(s => s.id === +id)
    let { num, updateHeight, increaseHeight, showClear } = useContext(CatContext)
    return (
        <Container>
            <div className="single">
                <div className="single-contanier">
                    <div className="img-container">
                        <img src={`${single.image}`} alt={single.title} />
                    </div>
                    <div className="info-container">
                        <h4>{single.title}</h4>
                        <p className='single-price'>${single.price}</p>

                        <div className='price-container'>
                            <label>Quantity:    <input
                                type='number'
                                min={1}
                                max={100}
                                value={qty}
                                onChange={e => setQty(e.target.value)}

                            /></label>

                            <button onClick={() => { dispatch(addToCart({ ...single, quantity: qty })); increaseHeight(); updateHeight(`calc(120vh * ${num})`); showClear() }} className='add-to-cart'>Add to cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </Container >

    )
}


export default Single