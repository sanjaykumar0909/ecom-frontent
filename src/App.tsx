// import React from "react"
import { Routes, Route } from "react-router-dom"
import "./styles.scss"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import { ShoppingCartProvider } from "./context/ShoppingContext"
import { ProductProvider } from "./context/ProductContext"
import { useEffect } from "react"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
function App() {
  return<>
    <ProductProvider>
        <ShoppingCartProvider>
        <Navbar />
        <div style={{height: "72px"}}></div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={''}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </ProductProvider>
  </>
}

export default App
