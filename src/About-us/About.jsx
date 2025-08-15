import ClientSlider from "../componenet/ClientSider";
import AwardsAndLocations from "../pages/AwardsAndLocations";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import ContactForm from "../pages/ContactForm";


const About=()=> {
  return (
<>
<Page1 />
<Page2 />
<Page3/>
<Page4/>
<AwardsAndLocations/>
<ClientSlider/>
<ContactForm/>
</>
  );
}


export default About;
