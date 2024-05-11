import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import { Container, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap'
import { useContext, useState } from "react"
import { CatContext } from "../context/CatContext"

//ICONS
let drop = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="evaArrowDownFill0"><g id="evaArrowDownFill1"><path id="evaArrowDownFill2" fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17Z" /></g></g></svg>


let Navb = ({ toggle, setToggle }) => {

    let [display, setDisplay] = useState("block")
    let hideNav = () => {
        setDisplay("none")
    }
    let showNav = () => {
        setDisplay("block")
    }

    let handleNav = () => {
        hideNav();
        showNav();

    }


    return (
        <nav onClick={() => { handleNav(); setToggle(false) }} style={{ left: toggle && "0", display: display }} className='navbar-class' >
            <Container >
                <Nav  >
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='dropdown-container'>
                        <Nav.Link >Product {drop}</Nav.Link>
                        <Nav.Item className='dropdown' >
                            <Link to='T-shirts' >T-shirts</Link>
                            <Link to="jackets">Jackets</Link>
                            <Link to="shoes">Shoes</Link>
                            <Link to="pants">Pants</Link>
                            <a href="All"  >All products</a>
                        </Nav.Item>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id='faq' >
                            <Link to='FAQ'>FAQ</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link ><Link to='Contact'>Contact us</Link></Nav.Link>

                    </Nav.Item>
                </Nav>
            </Container >
        </nav >

    )

}


export default Navb