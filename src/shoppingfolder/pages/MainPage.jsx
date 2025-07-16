import React,{useState} from 'react'
import MenCollections from '../components/MenCollections';
import Footer from '../components/Footer'
import Header from '../components/Header'; 
import Banner from '../components/Banner';
import  WomanCollections from '../components/WomanCollections';
import { Gents, Ladies,Beauty,Children,Furniture} from '../data';
import BeautyCollections from '../components/BeautyCollections';
import ChildrenCollections from '../components/ChildrenCollections';
import FurnitureCollections from '../components/FurnitureCollections';
import About from '../components/About';
import SearchResults from '../components/SearchResults';


const MainPage = () => {
  const[gentsFashion,setgentsFashion]=useState(Gents)
  const[ladiesFashion,setladiesFashion]=useState(Ladies)
  const[beautyFashion,setbeautyFashion]=useState(Beauty)
  const[childrenFashion,setchildrenFashion]=useState(Children)
  const[furniture,setfurniture]=useState(Furniture)

  return (
    <div className="main-wrapper">
        <Banner/>
        <MenCollections gentsFashion={gentsFashion}/>
        <WomanCollections ladiesFashion={ladiesFashion}/>
        <ChildrenCollections childrenFashion={childrenFashion}/>
        <Footer/>
        <BeautyCollections beautyFashion={beautyFashion}/>
        <FurnitureCollections furniture={furniture}/>
        <About/>

        
    </div>
  )
}

export default MainPage