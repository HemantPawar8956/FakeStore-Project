import { Component } from "react";
import App from "./../App";

class LeftServices extends Component {
  render() {
    return (
      <aside className="leftServicesBlock">
        <header className="home_services">
          <h2>Home services at your doorstep</h2>
        </header>
        <main>
          {/* ==============top Block=====================*/}
          <div className="top_block">
            <h3>What are you lokking for ?</h3>
            <aside className="services_looking_for">
              <div>
                <picture>
                  <img src="./img1.png" alt="image" />
                </picture>
                <p>Women's Salon,Spa & Laser Clinic</p>
              </div>
              <div>
                <picture>
                  <img src="./img2.png" alt="image" />
                </picture>
                <p>Men's Salon & Message</p>
              </div>
              <div>
                <picture>
                  <img src="./img3.jpeg" alt="image" />
                </picture>
                <p>AC & Application Repair</p>
              </div>
              <div>
                <picture>
                  <img src="./img4.png" alt="image" />
                </picture>
                <p>Cleaning & Pest Control</p>
              </div>
              <div>
                <picture>
                  <img src="img5.png" alt="image" />
                </picture>
                <p>Electrician,Plumber & Carpenter</p>
              </div>
              <div>
                <picture>
                  <img src="./img6.webp" alt="image" />
                </picture>
                <p>Painting & Waterproofing</p>
              </div>
            </aside>
          </div>
          {/*==================Bottom Block================ */}
          <div className="bottom_block">
            <h3>Buy Products </h3>
            <aside className="buy_Products">
            
            </aside>
          </div>
        </main>
      </aside>
    );
  }
}
export default LeftServices;
