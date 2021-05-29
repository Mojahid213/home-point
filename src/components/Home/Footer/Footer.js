import React from 'react';
import './Footer.css'
import facebook from "../../../Img/fb.png";
import instagram from "../../../Img/ig.png";
import twitter from "../../../Img/in.png";


const Footer = () => {
  return (
    <section class="background"style={{ height: "600px" }}>
        <div>
            <h1 class="text-center custom_Nav_brand"> <span
         
        >
           Home-point
        </span></h1>
        </div>
        <div class="row" style={{margin:"100px"}}>
            <div class="col-md-4">
             <h4>Our Address</h4>
             <p>Evanto HQ 24 Fifth st., Los Angeles, USA</p>
            </div>
            <div class="col-md-4">
             <h4>Talk To Expert</h4>
             <p>+1234 567 8910</p>
            </div>
            <div class="col-md-4">
             <h4>Email Us</h4>
             <p>home-point@gmail.com</p>
            </div>

        </div>
      <div class="row"style={{margin:"100px"}}>
        <div class="col-md-4">
          <h5>About {" "} <span class="custom_Nav_brand">Home-point</span> </h5>
          <p>
          A house is made of bricks and beams. A home is made of hopes and dreams.
            We’ve delivered fabulous in home experiences over the last two
            decades and are now poised to chart out a whole new growth
            story.
          </p>
          <div class="d-flex justify-content-start">
            <img src={facebook} style={{ width: "30px", padding: "3px" }} />
            <img src={twitter} style={{ width: "30px", padding: "3px" }} />
            <img src={instagram} style={{ width: "30px", padding: "3px" }} />
          </div>
        </div>
        <div class="col-md-4 footer-design">
          <h5>Our Services</h5>
          <a  href="#">
            <ul>
              <li>User Strategy</li>
              <li>Product Designing</li>
              <li>Marketing Strategy</li>
              <li>It Consultacy</li>
            </ul>
          </a>
        </div>
        <div class="col-md-4 footer-design">
          <h5> <span class="custom_Nav_brand">Home-point</span> Faqs</h5>
          <a href="#"  >
            <ul>
              <li>User Strategy</li>
              <li>Product Designing</li>
              <li>Marketing Strategy</li>
              <li>It Consultacy</li>
            </ul>
          </a>
        </div>
        
      </div>
    </section>
  );
};
export default Footer;