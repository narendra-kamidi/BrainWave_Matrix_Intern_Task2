import React from 'react'
import './App.css'
import MainPage from './shoppingfolder/pages/MainPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './shoppingfolder/components/About'
import WomanCollections from './shoppingfolder/components/WomanCollections'
import { Ladies,Children, Furniture, Gents, Beauty } from './shoppingfolder/data'
import ChildrenCollections from './shoppingfolder/components/ChildrenCollections'
import FurnitureCollections from './shoppingfolder/components/FurnitureCollections'
import Collections from './shoppingfolder/components/MenCollections'
import BeautyCollections from './shoppingfolder/components/BeautyCollections'
import Header from './shoppingfolder/components/Header'
import AuthPage from './shoppingfolder/components/AuthPage'
import CartPage from './shoppingfolder/components/CartPage'
import { CartProvider } from './shoppingfolder/context/CartContext';
import SearchResults from './shoppingfolder/components/SearchResults';
import ProductDetail from './shoppingfolder/components/ProductDetail'; // ✅ correct
import ForgotPasswordPage from './shoppingfolder/components/ForgotPasswordPage'



const App = () => {
  const allProducts = [
  ...Ladies.products,
  ...Gents.products,
  ...Children.products,
  ...Furniture.products,
  ...Beauty.products,
];
  return (
    <BrowserRouter>
    <CartProvider>
    <Header/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
       <Route 
          path="/home" 
          element={<MainPage/>} />
      <Route path='/about' element={<About/>}/>
       <Route 
          path="/women" 
          element={<WomanCollections ladiesFashion={Ladies} />} 
        />
           <Route 
          path="/children" 
          element={<ChildrenCollections childrenFashion={Children} />} 
        />
        <Route 
          path="/furniture" 
          element={<FurnitureCollections furniture={Furniture} />} 
        />
        <Route 
          path="/men" 
          element={<Collections gentsFashion={Gents} />} 
        />
        <Route 
          path="/beauty" 
          element={<BeautyCollections beautyFashion={Beauty} />} 
        /> 
        <Route 
          path="/signup&signin" 
          element={<AuthPage/>} 
        /> 
        <Route 
          path="/cartpage" 
          element={<CartPage/>} 
        /> 
        <Route path="/search"
         element={<SearchResults />} />
         <Route path="/product/:id" 
         element={<ProductDetail products={allProducts} />} />
         <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App