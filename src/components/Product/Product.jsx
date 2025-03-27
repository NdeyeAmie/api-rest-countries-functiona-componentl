import React, { useState } from 'react';
import '../Product/Product.css'
import { Link } from 'react-router-dom';
import CountryFlag from '../CountryFlag';


const Product = () => {
    const [ products , setProducts ] = useState([
        { id: "1", image: "img/f1.jpg", prenom: "Adidas", desc: "Cartoon Astronaut T-Shirt", prix: "43CFA" },
        { id: "2", image: "/img/f2.jpg", prenom: "Nike", desc: "Cartoon Astronaut T-Shirt", prix: "43CFA" },
        { id: "3", image: "/img/f3.jpg", prenom: "Jordan", desc: "Cartoon Astronaut T-Shirt", prix: "43CFA" },
        { id: "4", image: "/img/f4.jpg", prenom: "Aire max", desc: "Cartoon Astronaut T-Shirt", prix: "43CFA" }
    ])
    console.log(products);
    
  return (
    <div className="container">
    <section id="product1" className="section-p1">
    <div className="pro-container">  
    {products.map((product) => (
      <div className="pro" key={product.id}>
      <img src={product.image} alt={product.desc} />
      <div className="des">
        <span>{product.prenom}</span>
        <h5>{product.desc}</h5>
        <div className="star">
          {[...Array(5)].map((el, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
        <h4>{product.prix}</h4>
      </div>
      <Link to="/detailProduct"><i className="bx bx-cart-alt cart"></i></Link>
    </div>
    ))}  
    </div>
    </section>
    <CountryFlag/>
    </div>
  )
}

export default Product