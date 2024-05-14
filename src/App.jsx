import { Component } from "react";
import NavbarContainer from "./Navbar/NavbarContainer";
import ServiceContainer from "./services/ServiceContainer";
import Carousel from "./carousel/carousel";
import New_noteworthy from './carousel/New-noteworthy';
import Most_booked_services from './carousel/Most-booked-services';
import Salon_for_women from './carousel/Salon-for-women';
import Doctor_hair_treatment from './carousel/doctor-hair-treatment';
import Spa_for_women from './carousel/Spa-for-women';
import Pest_controll from "./carousel/Pest-control";

class App extends Component {
  render() {
    return (
      <>
        <NavbarContainer />
        <ServiceContainer />
        <Carousel />
        <New_noteworthy/>
        <Most_booked_services/>
        <Salon_for_women/>
        <Doctor_hair_treatment/>
        <Spa_for_women/>
        <Pest_controll/>
      </>
    );
  }
}
export default App;
