import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import one from "./assets/images/one.jpg";
import two from "./assets/images/two.jpg";
import three from "./assets/images/three.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Navbar() {
  return (
    <div className="nav">
      <h1 className="navbar">Perfumy</h1>
      <ul class="item">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
}

function Search() {
  return (
    <div className="search-container">
      <input className="search" type="text" placeholder="Search" />
    </div>
  );
}
//Product Component
function Products()
{
  return(
    <div className="Products">
      <div className="box">
        <img src={one}></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> 
        </div>
      <div className="box">
        <img src={two}></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> 
        </div>
      <div className="box">
        <img src={three}></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  </p>
      </div>
    </div>
  )
}
function About()
{
  return(
  <div className="Ab">
    <div className="About">
      <h1>About Us</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quod vero, error quam eius distinctio neque! Doloremque animi vitae consectetur veniam eligendi accusamus id, recusandae exercitationem est molestiae delectus officiis.</p>
    </div>
  </div>
  )
}
//Footer
function Footer()
{
  return(
    <footer>
    <div class="contact">
      <h3>Contact</h3>
      <p>+91 9876543210<br></br>
      perfumy@gmail.com</p>

    </div>
    <div className="copy">
      <p >W3Schools is optimized for learning and training. Examples might be simplified

        Copyrights 1999-2023 by Refsnes Data. All Rights Reserved.
        W3Schools is powered by W3.CSS
      </p>
    </div>
    </footer>

  )
}
root.render(
  <div>
    <Navbar />
    <Search />
    <Products/>
    <About/>
    <Footer/>
  </div>
);
