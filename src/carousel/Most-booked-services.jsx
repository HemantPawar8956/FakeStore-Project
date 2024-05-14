import { Component } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";

class Most_booked_services extends Component {
  render() {
    return (
      <section className="Most_booked_services">
        <h1>Most Booked Services</h1>
        <article>
          <div className="service">
            <img src="./carousel2-1.webp" alt="image" />
            <p className="image-title">Intense bathroom cleaning</p>
            <p><AiFillStar />4.76 (1.1M)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
          <div className="service">
            <img src="./carousel2-2.webp" alt="image" />
            <p className="image-title">Classic bathroom Cleaning</p>
            <p><AiFillStar />4.80 (862.7K)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
          <div className="service">
            <img src="./carousel2-3.webp" alt="image" />
            <p className="image-title">Haircut for men</p>
            <p><AiFillStar />4.87 (680K)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
          <div className="service">
            <img src="./carousel2-4.webp" alt="image" />
            <p className="image-title">Sofa cleaning</p>
            <p><AiFillStar />4.85 (108K)</p>
            <p><BsCurrencyRupee />4999
            </p>
          </div>
          <div className="service">
            <img src="./carousel2-5.jpg" alt="image" />
            <p className="image-title">Elysian British rose pedicure</p>
            <p><AiFillStar />4.80 (198.6K)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
          <div className="service">
            <img src="./carousel2-6.webp" alt="image" />
            <p className="image-title">Fully Automatic (Top Load) Checkup</p>
            <p><AiFillStar />4.76 (1.1M)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
          <div className="service">
            <img src="./carousel2-7.webp" alt="image" />
            <p className="image-title">Stress relief swedish massage</p><p><AiFillStar />4.80 (862.7K)</p>
            <p><BsCurrencyRupee />4999
            </p>
          </div>
          <div className="service">
            <img src="./carousel2-8.webp" alt="image" />
            <p className="image-title">Apartment Pest Control</p>
            <p><AiFillStar />4.87 (680K)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
          <div className="service">
            <img src="./carousel2-9.webp" alt="image" />
            <p className="image-title">Tap repair</p>
            <p><AiFillStar />4.85 (108K)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
          <div className="service">
            <img src="./carousel-2-10.webp" alt="image" />
            <p className="image-title">Intense cleaning -2 bathroom pack</p>
            <p><AiFillStar />4.80 (198.6K)</p>
            <p><BsCurrencyRupee />4999</p>
          </div>
        </article>
      </section>
    );
  }
}
export default Most_booked_services;
