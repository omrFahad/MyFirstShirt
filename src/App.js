import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Jackets from './components/Jackets';
import Tshirts from './components/Tshirts';
import Shoes from './components/Shoes';
import Home from './components/Home';
import Navb from './components/Navb';
import Pants from './components/Pants';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';
import FAQ from './components/FAQ';
import Single from './components/Single';
import Login from './components/Login';
import { products } from './data/products';
import { react, useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <Header toggle={toggle} setToggle={setToggle} data={products} />
      <Navb toggle={toggle} setToggle={setToggle} />
      <Routes>
        <Route path='/All' element={<Allproducts data={products} />} />
        <Route path='/' element={<Home />} />
        <Route path='/Jackets' element={<Jackets data={products} />} />
        <Route path='/T-shirts' element={<Tshirts data={products} />} />
        <Route path='/Shoes' element={<Shoes data={products} />} />
        <Route path='/Pants' element={<Pants data={products} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/single/:id' element={<Single />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
