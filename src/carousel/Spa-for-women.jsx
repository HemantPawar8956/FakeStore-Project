import { Component } from "react";

class Spa_for_women extends Component {
  render() {
    return (
      <section className="spa_for_women">
        <h1>Spa for women</h1>
        <p className="benefits">Refresh. Rewind. Rejuvenate</p>
        <article>
          <div className="spa">
            <p className="spa-title">Stress relief</p>
            <img src="./spa-1.webp" alt="image" />
          </div>
          <div className="spa">
            <p className="spa-title">Pain relief</p>
            <img src="./spa-2.webp" alt="image" />
          </div>
          <div className="spa">
            <p className="spa-title">Natural skincare</p>
            <img src="./spa-3.webp" alt="image" />
          </div>
        </article>
      </section>
    );
  }
}
export default Spa_for_women;
