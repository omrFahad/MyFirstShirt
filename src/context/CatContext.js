import { createContext, useState, useEffect } from "react";
import { products } from "../data/products";

export let CatContext = createContext()

const getHeight = localStorage.getItem('height')



let CatContexProvider = ({ children }) => {
    const [height, setHeight] = useState(getHeight || '120vh');

    let [cat, setCat] = useState(products)
    let [num, setNum] = useState(1)
    let [display, setDisplay] = useState("none")

    const updateHeight = (newHeight) => {
        localStorage.setItem('height', newHeight);
        setHeight(newHeight);
    };

    // to increase height of cart page when add a new product to avoid footer issue
    let increaseHeight = () => {
        setNum(num + 0.38)
    }

    // to decrease height of cart page not necessary 
    let decreaseHeight = () => {
        setNum(num - 0.38)
    }

    let showClear = () => {
        setDisplay("block")
    }

    let catFunction = (catItem) => {
        let result = products.filter((catData) => {
            return catData.category === catItem
        })
        setCat(result)


    }
    let CatFunction2 = (catItem) => {
        let result = products.filter((catData) => {
            return catData.category === catItem
        })

        useEffect(() => {
            setCat(result)
        }, [0])


    }


    return (
        <CatContext.Provider value={{
            cat,
            setCat,
            height,
            num,
            display,
            updateHeight,
            increaseHeight,
            decreaseHeight,
            showClear,
            products,
            catFunction,
            CatFunction2,

        }}>
            {children}

        </CatContext.Provider>
    )
}

export default CatContexProvider