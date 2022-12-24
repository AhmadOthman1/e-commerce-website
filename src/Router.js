import React from 'react'
import Home from "./Views/Home";
import ProductsFilter from "./Views/ProductsFilter";
import Login from "./Views/Login";
import {Route,BrowserRouter,Routes} from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/shop" element={<ProductsFilter />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;