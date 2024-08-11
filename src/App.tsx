// import React from "react"
import { Routes, Route } from "react-router-dom"
import "./styles.scss"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import { ShoppingCartProvider } from "./context/ShoppingContext"
import { ProductProvider } from "./context/ProductContext"
import { AuthProvider } from "./context/AuthContext"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
import Test2 from "./components/test/navigate"
import Test1 from "./components/test/redirect"
function App() {
  return<>
    <ProductProvider>
        <ShoppingCartProvider>
            <AuthProvider>
                <div className="body-wrapper">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/store" element={<Store />}></Route>
                            <Route path="/about" element={''}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/testing">
                                <Route path="t1" element={<Test1 />}></Route>
                                <Route path="t2" element={<Test2 />}></Route>
                            </Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </AuthProvider>
      </ShoppingCartProvider>
    </ProductProvider>
  </>
}

export default App
