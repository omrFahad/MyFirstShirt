import '../styles/header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';


// ICONS
let jacket = <svg xmlns="http://www.w3.org/2000/svg" width="256" height="195" viewBox="0 0 256 195"><path fill="currentColor" d="M195.575 178.073c-1.29 5.534-1.953 8.904-4.709 12.623c-1.836 2.48-4.845 3.904-7.91 3.545c-2.663-.31-5.242-1.452-7.835-2.45c-29.986-11.541-54.185-31.862-78.634-51.809c-5.827-4.754-18.124-15.761-25.108-21.544c17.003-12.02 24.041-19.454 24.041-19.454c27.398 23.786 59.341 51.632 92.678 65.56c5.312 2.22 10.283 1.5 7.477 13.53m-33.885-89.4c-7.713-6.096-21.204-16.215-28.82-22.09c-19.353-14.929-39.994-27.388-63.672-34.487c-12.825-3.845-14.51-16.736-4.814-28.123c1.763-2.07 4.518-3.428 7.18-2.871c44.1 9.233 77.474 36.255 114.638 70.36c-12.574 6.643-24.513 17.21-24.513 17.21" /><path fill="#222" d="M135.123 120.68c27.537-27.87 81.002-61.546 107.964-62.784a8.701 8.701 0 0 1 7.801 4.117c2.656 4.308 3.514 9.466 4.307 14.538c.766 4.9-1.789 9.083-6.437 10.385c-32.212 9.023-63.496 30.96-88.888 51.905c-8.541-4.034-24.747-18.16-24.747-18.16m-15.03-52.775C88.46 94.319 54.137 125.83 17.03 137.113c-3.132.953-6.59.167-8.844-2.209c-3.031-3.196-4.192-6.486-5.42-9.687c-4.294-11.185-3.077-14.457 8.038-18.734C36.894 96.44 58.602 79.75 79.605 61.91c3.18-2.701 9.489-7.888 12.968-10.749c11.506 3.084 27.52 16.745 27.52 16.745m-56.989 97.456c9.071-4.649 23.037-10.135 32.14-15.25c7.355 6.484 24.383 19.402 24.383 19.402c-12.347 8.254-32.04 20.543-45.749 24.088c-3.314.857-6.833-.433-8.927-3.141c-4.008-5.187-6.326-10.693-6.525-17.246c-.1-3.287 1.752-6.354 4.678-7.853m73.551-144.697C152.867 10.86 171.108 3.496 183.607.822c3.437-.735 7.03.766 8.916 3.732c3.587 5.64 5.078 11.306 4.712 17.505c-.18 3.058-1.876 5.833-4.564 7.3c-7.841 4.283-21.807 7.622-29.834 11.125c0 0-14.155-11.94-26.182-19.819" /><path fill="#ff0000" d="M233.097 101.673c21.895 8.504 29.971 11.387 13.998 33.451c-1.873 2.586-4.848 2.603-7.956 1.869c-9.962-2.353-27.64-12.54-37.426-18.232c18.038-12.478 31.384-17.088 31.384-17.088M25.672 91.788c-5.407-1.546-15.694-3.177-20.405-6.046c-2.13-1.297-3.562-3.555-3.867-6.03c-.774-6.256.832-11.89 3.883-17.56a8.672 8.672 0 0 1 8.568-4.502c10.499 1.166 29.473 9.1 39.745 13.797C38.72 85.145 25.672 91.788 25.672 91.788" /></svg>
let cartIcon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.28 6H1.72a1 1 0 0 0-1 1.2l1.1 5.5a1 1 0 0 0 1 .8h8.36a1 1 0 0 0 1-.8l1.1-5.5a1 1 0 0 0-1-1.2ZM9 2.5L11 6M3 6l2-3.5" /></svg>
let search = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path fill="currentColor" d="M10 .188A9.812 9.812 0 0 0 .187 10A9.812 9.812 0 0 0 10 19.813c2.29 0 4.393-.811 6.063-2.125l.875.875a1.845 1.845 0 0 0 .343 2.156l4.594 4.625c.713.714 1.88.714 2.594 0l.875-.875a1.84 1.84 0 0 0 0-2.594l-4.625-4.594a1.824 1.824 0 0 0-2.157-.312l-.875-.875A9.812 9.812 0 0 0 10 .188zM10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zM4.937 7.469a5.446 5.446 0 0 0-.812 2.875a5.46 5.46 0 0 0 5.469 5.469a5.516 5.516 0 0 0 3.156-1a7.166 7.166 0 0 1-.75.03a7.045 7.045 0 0 1-7.063-7.062c0-.104-.005-.208 0-.312z" /></svg>
let user = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22"><path fill="currentColor" d="M4 2h14v1h1v1h1v14h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1zm0 14h1v-1h2v-1h8v1h2v1h1V5h-1V4H5v1H4zm12 2v-1h-2v-1H8v1H6v1zM9 5h4v1h1v1h1v4h-1v1h-1v1H9v-1H8v-1H7V7h1V6h1zm3 3V7h-2v1H9v2h1v1h2v-1h1V8z" /></svg>
let menu = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" /></svg>
let close = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>


let Header = ({ data, toggle, setToggle }) => {
    let cart = useSelector(state => state.cart)
    let [search, setSearch] = useState("");
    let [show, setShow] = useState("")

    let displayItems = (dis) => {
        if (dis == true) {
            setShow("none")
        } else {
            setShow("block")
        }
    }
    return (
        <>

            <Navbar  >
                <Container className='header-container'>
                    <div onClick={() => { console.log(toggle); setToggle(prev => !prev) }} className='header-menu'>
                        {toggle ? close : menu

                        }
                    </div>
                    <InputGroup>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(event) => {
                                setSearch(event.target.value);
                            }}
                        />
                        <span className='search-container'>
                            {data
                                .filter((val) => {
                                    if (search == "") {
                                        return null;
                                    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                })
                                .map((val) => {

                                    return (
                                        <Link onClick={() => displayItems(true)} style={{ display: `${show ? "none" : "block"}` }} to={`/single/${val.id}`} className="items" key={val.id} >
                                            < div className='img-container'>
                                                <img src={val.image} alt="" />
                                            </div>
                                            <div className='title-container'>
                                                <h6>{val.title}</h6>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </span>

                    </InputGroup>
                    <Link to="/">
                        <Navbar.Brand href="#home">{jacket}My<b>First</b>Shirt</Navbar.Brand>
                    </Link>
                    <Nav>
                        <Nav.Link className='cartFig' >
                            <Link to="Cart">
                                {cartIcon}
                                <span>{cart.length}</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='loginFig'>
                            <Link to="Login">
                                {user}
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar >

        </>
    )
}

export default Header