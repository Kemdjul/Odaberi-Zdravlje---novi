import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Slider from '../components/home/Slideshow';
import SingledOutProducts from '../components/home/SingledOutProducts';
import Programs from '../components/home/Programs';
import Partners from '../components/home/Partners';
import Products from '../components/home/Products';
import Categories from '../components/home/Categories';
import VitaCard from '../components/home/VitaCard';
import News from '../components/home/News';
import Footer from '../components/Footer';
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState();

  /* Fetching products from MySQL server */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3300/proizvodi");
        setProducts(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="page-container">
        <Nav />
        <Slider />
        <SingledOutProducts productList={products} />
        <Programs />
        <Partners />
        <Categories />
        <Products productList={products} />
        <VitaCard />
        <News />
        <Footer />
    </div>
  )
}

export default Home