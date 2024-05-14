import { Component } from "react";
import LeftServices from "./leftServices";
import RightServices from "./rightServices";

class ServiceContainer extends Component {
  render() {
    return (
      <section id="serviceBlock">
        <article className="container">
          <LeftServices />
          <RightServices />
        </article>
      </section>
    );
  }
}
export default ServiceContainer;
