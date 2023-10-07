import React from 'react'
import img1 from "../Screenshot (9).png"
import img2 from "../Screenshot (10).png"
import img3 from "../Screenshot (11).png"


const Carousal = () => {
    
    const carouselItems = document.querySelectorAll(".carousel_item"); 
    let i = 1;
    
    setInterval(() => {
    // Accessing All the carousel Items
     Array.from(carouselItems).forEach((item,index) => {
    
       if(i < carouselItems.length){
        item.style.transform = `translateX(-${i*100}%)`
       }
      })
    
    
      if(i < carouselItems.length){
        i++;
      }
      else{
        i=0;
      }
    },2000)
  return (
    <div className='container mb-5'>
      
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Carousal
