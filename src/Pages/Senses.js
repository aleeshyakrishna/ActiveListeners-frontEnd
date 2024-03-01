import React from "react";
import "../Css/Senses.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import { TiArrowRightThick } from "react-icons/ti";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Nool from "../Images/Nool.png";
import Coc from "../Images/Coc.png";
import Gitarakka from "../Images/Gitarakka.png";
import spa from "../Images/spa.png";
import Children from "../Images/Childern.png";
import Menbulb from "../Images/Menbulb.png";

const Senses = () => {
  return (
    <div>
      <Navbar />
      <div className="secnses-main">
        <div className="therapy-heading">
          <p>Therapy for you!</p>
          <h1>Senses</h1>
          <h2>Resurrection</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <div className="tele-buttons">
            <button>Get Appointment</button>
            <p>Book Your Complimentary 15-min Call</p>
            <TiArrowRightThick className="arrow-for-tele" />
          </div>
        </div>
        <div className="green-bourd-grief">
          <div class="card-grif">
            <div class="circle">
              <img src={Roundb} alt="" />
            </div>
            <div class="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div class="card-inner">
              <div>
                <h1>Senses</h1>
                <p>Resurrection</p>
              </div>

              <img src={Kadhoolu} alt="" />
            </div>
          </div>
        </div>
        <div className="therapy-heading">
          <p>Therapies in senses Resurrecction</p>
          <h1> Reviving your</h1>
          <h2>Senses</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <span>
            We believe that early age gadget exposure adaption to mobile among
            Children has now led to a time where there is decrease in learning
          </span>
        </div>
        <div className="senses-category-cards">
          <div className="senses-card">
            <h1>Body Essential Salts & Oils</h1>
            <img src={Nool} alt="" />
          </div>

          <div className="senses-card">
            <h1>Music & Art</h1>
            <img src={Gitarakka} alt="" />
          </div>

          <div className="senses-card">
            <h1>Mandala Art Books</h1>
            <img src={Children} alt="" />
          </div>

          <div className="senses-card">
            <h1>brain-boosting diets</h1>
            <img src={Menbulb} alt="" />
          </div>

          <div className="senses-card">
            <h1>Flavour Exploration</h1>
            <img src={Coc} alt="" />
          </div>

          <div className="senses-card">
            <h1>DIY activities</h1>
            <img src={spa} alt="" />
          </div>
        </div>
      </div>
      <button className="get-support">Get Support</button>
      <div className="sense-form">
        <div className="get-form">
          <form>
            <h1>Get in Touch</h1>
            <p>With us</p>
            <div className="form-inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Message" />
            </div>
            <div className="agree-get">
              <input type="checkbox" />
              <p>
                By Submitting your details means you agree with Privacy Policy
                and Term & Conditions
              </p>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Senses;
