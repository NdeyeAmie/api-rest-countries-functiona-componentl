import React from 'react'

function ProductDetail() {
  return (
    <section id="prodetails" class="section-p1">
    <div class="single-pro-image">
        <img src="/img/f1.jpg" width="100%" id="MainImg" alt=""/>

        <div class="small-img-group">
        <div class="small-img-col">
            <img src="/img/f1.jpg" width="100%" class="small-img" alt=""/>
        </div>
        <div class="small-img-col">
            <img src="/img/f2.jpg" width="100%" class="small-img" alt=""/>
        </div>
        <div class="small-img-col">
            <img src="/img/f3.jpg" width="100%" class="small-img" alt=""/>
        </div>
        <div class="small-img-col">
            <img src="/img/f4.jpg" width="100%" class="small-img" alt=""/>
        </div>
    </div>
</div>

<div class="single-pro-details">
    <h6>Home / T-Shirt</h6>
    <h4>Men's Fashion T Shirt</h4>
    <h2>$139.00</h2>
    <select name="" id="">
        <option>XL</option>
        <option>XXL</option>
        <option>Small</option>
        <option>Large</option>
    </select>
    <input type="number" value="1"/>
    <button class="normal">Add To Cart</button>
    <h4>Product Details</h4>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium 
        distinctio neque repellendus sint et, incidunt nobis adipisci vitae voluptate rem
         aliquid asperiores? Praesentium ex rem perferendis minima optio at. Doloremque eaque, 
         totam dolorem quos officiis quia ea quas id minus soluta sunt doloribus animi cupiditate 
         labore deleniti deserunt, laudantium eligendi pariatur et autem officia cumque laborum, expedita ab.
        Inventore itaque quibusdam, soluta hic odit nobis. Ullam autem laudantium at ratione enim optio quo, </span>
</div>
</section>
  )
}

export default ProductDetail