import React from 'react'
import img from "../logo.png"
import phone from "../phone_o.png"

const Navbar = () => {
  return (
    <div className='container my-2 '>
      <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id='logo-org' src={img} alt='img'width="137" height="50" ></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Pricing</a>
        <a class="nav-link mx-1" href="#">How It Works</a>
        <a class="nav-link mx-1" href="#">Reviews</a>
        <a class="nav-link mx-2" href="#">|</a>
        <a class="nav-link-brand" aria-disabled="false">Brands</a>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </p>
        
        <a id='phone-number' class="nav-link mx-1 " href="#"><img id='phone-number2' class="header_menu_right_phone_img" src={phone} alt="" width="13px" height="14px"></img>+91 888 6446 12</a>
        <a class="nav-link mx-1 " href="#">Login</a>
        <a class="nav-link mx-1" href="#">Register</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
