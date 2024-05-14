import  { Component } from 'react';
import { GrArticle } from 'react-icons/gr';

class New_noteworthy extends Component {
  render() {
    return (
      <section className='New_and_noteworthy'>
        <h2> New and noteworthy</h2>
        <div className="container">
            <div className='cont'><img src="./Water-purifier.webp" alt="image" /><p>Native Water Purifier</p></div>
            <div className='cont'><img src="./Bathroom-cleaning.jpeg" alt="image" /><p>Bathroom & kitchen cleaning</p></div>
            <div className='cont'><img src="./Home-painting.jpeg" alt="image" /><p>Home painting</p></div>
            <div className='cont'><img src="./Salon-royale.jpg" alt="image" /><p>Salon Royale for kids & men</p></div>
            <div className='cont'><img src="./Laser-hair-reduction.webp" alt="image" /><p>Laser hair reduction</p></div>
            <div className='cont'><img src="./Laptop-repairing.webp" alt="image" /><p>Laptop repair (at home)</p></div>
            <div className='cont'><img src="./Ayurvedic-spa.jpeg" alt="image" /><p>Ayurvedic spa</p></div>
            <div className='cont'><img src="./nail-studio.webp" alt="image" /><p>Nail studio for women</p></div>
            <div className='cont'><img src="./HAir-studio.webp" alt="image" /><p>Hair studio for women</p></div>
            <div className='cont'><img src="./Ac-srvices.webp" alt="image" /><p>Ac Service & Repaire</p></div>
        </div>
      </section>
    )
  }
}
export default New_noteworthy;