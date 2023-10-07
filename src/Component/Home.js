import React from 'react'

const Home = () => {

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
    <div id='home' className='container my-5'>
      <div class="new_left_banner_box mt-20">
      <h1 id="heading1" ><b>India's Top</b></h1>
      <h1 id='branding' ><b>Branding Agency</b></h1>

      <div class="logo_design_search_box autocomplete">
        <i class="fa fa-search" aria-hidden="true" ></i>
        <input className='search-bar' type="text" name="" id="searchbox" value="" onkeyup="searchFunction()" autocomplete="off" placeholder="logo"/>
        <div class="hand_in_hand_logo mob_hand_in_hand">
        </div>


        <div id="carouselExampleIndicators" class="carousel carousel-2 slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" hidden data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators"  hidden data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" hidden data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
        <img  id='stamp' src='https://www.99logos.in/img/new_img_22/hand-in-hand-logo-final_2.png' width="150px" height="150px"></img>
    <div class="carousel-item carousel-item-2 active">
      <img src="https://www.99logos.in/img/new_img_22/boltark-mockup-1.webp" class="d-block w-60" alt="..."/>
    </div>
    <div class="carousel-item carousel-item-2">
      <img src="https://www.99logos.in/img/new_img_22/Zissto-Mockup%201.webp" class="d-block w-60" alt="..."/>
    </div>
    <div class="carousel-item carousel-item-2"  >
      <img src="https://www.99logos.in/img/new_img_22/Insync-mockup.webp" class="d-block w-60" alt="..."/>
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

        <div class="search_result_box d-none" >
          <ul>

          </ul>
        </div>
      </div>

      <div class="hook_line">
        <p>We believe in working together to achieve the unmatched design quality, which escalates your brand to new heights!</p>
      </div>
    
      <div class="get_started_btns">
        <a href="https://www.99logos.in/logo-and-brand-identity">
          <div class="get_started_btn" >
            Get started
          </div>
        </a>
        <a href="https://www.99logos.in/portfolio">
          <div class="our_work_btn" >
            Our work
          </div>
        </a>
      </div>

      <div class="new_blog_title_btn" >
        <span class="new_blog_underline_btn">Free Consultation</span> <span> 
            <img id='arrow' src="https://www.99logos.in/img/right_arrow_index.png"  alt=""/> </span>
      </div>

      
      <div class="shark_tank_box">
      <div class="left_shark_tank_box">
        <div class="shark_tank_left_box">
          <div >
            <img class="shark_tank_img" src="https://www.99logos.in/img/sharktank/sharktank.jpg" alt="Shark Tank India"/>
          </div>
          <div >
            <h2 id='h2'>Rebranded</h2>
            <h3 id='h3'><b>Shark Tank India</b>  <span>featured brand</span></h3>
            <img class="shark_tank_brand" src="https://www.99logos.in/img/sharktank/mine4nine-shark-logo.png"  alt=""/>
          </div>
          <div class="faint_img">
            <img src="https://www.99logos.in/img/sharktank/shark-tank-gredient-img.png" alt="Vertical Gradient Image" class="shark_vertical_img"/>
            {/* <img src="https://www.99logos.in/img/sharktank/shark-tank-gredient-horizontal-img.png" width="70px" height="164px" alt="Horrizontal Image" class="shark_horizontal_img"/> */}
          </div>
          <div class="" >

          </div>
        </div>
      </div>
      <div class="right_shark_tank_box">
        <img id="right_shark_tank_box" src="https://www.99logos.in/img/sharktank/Sharktankseasone2.jpg"alt="Shark Tank India Season2"/>
      </div>
      <div class="" >

      </div>
    </div>



    <div class="new_packages_title_box">
    <div class="container">
      <div class="left_new_packages_box">
        <p>Lets design what you desire!</p>
        <p class="packages_sub_text">Select from one of our top selling services</p>
      </div>
      <div class="right_new_packages_box">
        <a href="logo-and-brand-identity" target="_blank">
          <div class="new_packages_title_btn ">
            <span id='explore'>Explore all packages </span><span> <img src="https://www.99logos.in/img/right_arrow_index.png" alt=""/> </span>
          </div>
        </a>
      </div>
    </div>
  </div>


    </div>
    </div>
  )
}

export default Home
