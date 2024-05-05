import { Container } from "react-bootstrap"
import "../styles/feature.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { products } from "../data/products"

let img1 = <img src="https://cdn.pixabay.com/photo/2015/08/14/12/48/knitting-pattern-888375_1280.png" />


let Feature = () => {

    return (
        <Container>
            <div className="feature">

                <div className="feature-container">

                    {/* BOX 1 */}
                    <Link to={`/T-shirts`} className="feature-box">
                        <h6>T-shirts</h6>
                    </Link>
                    {/* BOX 2 */}
                    <Link to={`/Jackets`} className="feature-box">
                        <h6 >Jackets</h6>
                    </Link>

                    {/* BOX 3 */}
                    <Link to={`/Pants`} className="feature-box">
                        <h6>Pants</h6>
                    </Link>
                    {/* BOX 4 */}
                    <Link to={`/Shoes`} className="feature-box">
                        <h6>Shoes</h6>
                    </Link>

                </div>

            </div>
        </Container>

    )
}

export default Feature
