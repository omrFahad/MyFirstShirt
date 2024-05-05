import { useDispatch, useSelector } from "react-redux"
import { Button, Container } from "react-bootstrap"
import { removeFromCart, clear, addToCart, increaseQuantity, decreaseQuantity } from "../slices/cartSlice"
import "../styles/cart.scss"
import { useState, useContext, useEffect } from "react"
import { CatContext } from "../context/CatContext"



let Cart = () => {
    let cart = useSelector(state => state.cart)
    let dispatch = useDispatch()
    let { num, height, updateHeight, decreaseHeight, display } = useContext(CatContext)
    let [hide, setHide] = useState(true)
    let hideToggle = () => {
        setHide(!hide)
    }

    return (
        <Container>

            <div className="cart-page" style={
                { height: height }
            }>
                <h2>Shopping cart items</h2>
                <div className="cart-container">
                    <div className="cart-items">
                        {hide && < Button style={{ display: display }} onClick={() => { dispatch(clear()); hideToggle() }} variant="danger">Clear All</Button>}

                        {cart && cart.map(item =>
                            <div className='cart-item'>
                                <div className="cartImage">
                                    <img src={`${item.image}`} alt={item.title} />
                                </div>
                                <div className='cartInfo'>
                                    <h6>{item.title}</h6>
                                    <span>${item.price}</span>
                                </div>
                                <div className="cartButton">
                                    <div className="cartQuan">
                                        <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                    </div>
                                    <svg onClick={() => { dispatch(removeFromCart(item)); updateHeight(`calc(100vh * ${num})`); decreaseHeight() }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path fill="currentColor" d="M10.875 0a1 1 0 0 0-.594.281L5.562 5H3c-.551 0-1 .449-1 1v2c0 .551.449 1 1 1h.25l2.281 13.719a.998.998 0 0 0 0 .062c.163.788.469 1.541 1.032 2.157A3.258 3.258 0 0 0 8.938 26h8.124a3.26 3.26 0 0 0 2.375-1.031c.571-.615.883-1.405 1.032-2.219a.998.998 0 0 0 0-.031L22.78 9H23c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1h-1.563l-2.812-3.5a.813.813 0 0 0-.719-.313a.813.813 0 0 0-.343.125L14.688 3.25L11.717.281A1 1 0 0 0 10.876 0zM11 2.438L13.563 5H8.436L11 2.437zm6.844.656L19.375 5h-2.938l-.593-.594l2-1.312zM5.25 9h.688l1.187 1.188l-1.438 1.406L5.25 9zm2.094 0h.937l-.469.469L7.345 9zm2.312 0h1.688l.906.906l-2 2l-1.75-1.75L9.656 9zm3.125 0h.344l-.156.188L12.78 9zm1.781 0h1.688l1.156 1.156l-1.75 1.75l-2-2.031l.906-.875zm3.063 0h.938l-.47.469L17.626 9zm2.344 0h.812l-.437 2.688l-1.532-1.532L19.97 9zm-7.032 1.594l2.032 2l-2.031 2l-2-2l2-2zm-5.124.281l1.718 1.719l-2 2l-1.625-1.625l-.031-.156l1.938-1.938zm10.28 0l2 2l-1.718 1.75l-2-2.031l1.719-1.719zm-7.843 2.438l2 2l-2 2l-2-2l2-2zm5.406 0l2.031 2l-2 2l-2.03-2l2-2zm4.188 1.25l-.219 1.312l-.563-.563l.782-.75zm-13.657.093l.657.656l-.469.47l-.188-1.126zM7.532 16l2 2l-2 2.031l-.562-.562l-.407-2.5l.97-.969zm5.407 0l2.03 2.031l-2 2L10.939 18l2-2zm5.437 0l1.063 1.063l-.407 2.28l-.656.657l-2-2l2-2zm-8.125 2.719l2 2l-2 2.031l-2-2l2-2.031zm5.406 0l2 2l-2 2l-2-2l2-2zm-8.094 2.718l2 2L9 24h-.063c-.391 0-.621-.13-.874-.406a2.645 2.645 0 0 1-.594-1.188v-.031l-.125-.75l.218-.188zm5.407 0l2 2l-.563.563H11.5l-.563-.563l2.032-2zm5.406 0l.281.282l-.125.656c-.002.01.002.02 0 .031c-.095.49-.316.922-.562 1.188c-.252.27-.509.406-.907.406h-.125l-.562-.563l2-2z" /></svg>

                                </div>

                            </div>
                        )}

                    </div>
                    <div className='summary'>
                        <h4>Order Summary</h4>
                        <div className='summary-container'>
                            <div className='order-item'>
                                <span>Total : </span>
                                <span>
                                    $
                                    {cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
                                </span>
                            </div>
                            <div className='order-item'>
                                <span>Shipping cost : $10</span>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </Container >
    )

}

export default Cart