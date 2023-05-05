import Home from "./home";
import React from 'react';
import { Images } from "@/utils/Images";
// import styles from './page.module.css'
import {SidebarRoutes} from "@/pages/constant/sidebarLink";



export default function Home() {
  const shoesArray = [
    {
      id: 1,
      itemName: "blue shoes",
      price: "$20",
      country: "Pakistan",
      url: Images.blueShoes,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 2,
      itemName: "fancy sniker",
      price: "$50",
      country: "Pakistan",
      url: Images.fancySniker,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 3,
      itemName: "fleet",
      price: "$20",
      country: "Pakistan",
      url: Images.fleet,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 4,
      itemName: "joger",
      price: "$20",
      country: "Pakistan",
      url: Images.joger,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 5,
      itemName: "sniker",
      price: "$20",
      country: "Pakistan",
      url: Images.sniker,
      description: "Awesome item and best quality is our first priority.",
    },
  ];
  
  return (
    <div style={{padding:10}}>
      <Home tableData={shoesArray} navigation={SidebarRoutes?.gallery}/>
      <div style={{marginTop:10}}><Home tableData={shoesArray} navigation={'product/product'}/></div>
    </div>
  );
}
