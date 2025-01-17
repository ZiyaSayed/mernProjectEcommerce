import React, { Fragment } from 'react'
import {CgMouse} from "react-icons/cg";
import Product from "./Product.js";
import  "./Home.css";

const product={
    name:"Tshirt",
    images:[{url:"https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-600w-1725825019.jpg"}],
    price:"$50",
    _id:"abi"
}
const Home = () => {
  return (
    <Fragment>
        <div className="banner">
            <p>Welcome to Ecommer</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
                <button>
                    Scroll <CgMouse/>
                </button>
            </a>
        </div>

        <h2 className='homeHeading'>Featured Products</h2>
        <div className='container' id="container">
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>

        </div>
    </Fragment>
  )
}

export default Home