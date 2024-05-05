import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { addToCart } from "../slices/cartSlice"
import { CatContext } from "../context/CatContext"

import "../styles/best.scss"


let crown = <svg xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512"><path fill="currentColor" d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-57.3 114.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40h.7l45.7 251.4c5.5 30.4 32 52.6 63 52.6h277.2c30.9 0 57.4-22.1 63-52.6L535.3 176h.7c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" /></svg>

let Best = ({ pro }) => {
    let product = useSelector((state) => state.product)
    let dispatch = useDispatch()
    let { CatFunction2, cat, increaseHeight, showClear } = useContext(CatContext)



    let [slideIndex, setSlideIndex] = useState(0)
    // Handle Click
    let handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }
    return (
        <div className="best">
            <h2>Best Seller {crown} </h2>
            {slideIndex >= 1 && <svg onClick={() => handleClick("left")} className='best-arrow-left' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.29 8.71L9.7 11.3a.996.996 0 0 0 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z" /></svg>
            }

            <div style={{ transform: `translateX(${slideIndex * -240}px)` }} className='best-container'>

                {pro.map(item =>
                    <Link to={`/single/${item.id}`} key={item.id} className='best-box'>
                        <img src={item.image} />
                        <h6>{item.title}</h6>
                        <div className='best-price'>${item.price}</div>
                        <svg onClick={() => { dispatch(addToCart(item)); increaseHeight(); showClear() }} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039H160zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Zm224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.038 32.038 0 0 1-32 32Z" /></svg>
                    </Link>
                )}
            </div>
            {
                slideIndex <= pro.length && <svg onClick={() => handleClick("right")} className='best-arrow-right' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z" /></svg>
            }
        </div>

    )
}

export default Best 