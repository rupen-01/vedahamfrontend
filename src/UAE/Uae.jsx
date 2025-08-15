import Page1 from "./Page1";

import ContactForm from "../pages/ContactForm";
import OurServices from "../componenet/OurServices";
import ClientSlider from "../componenet/ClientSider";
import Industries from "../pages/Industries";
const UnitedStates=()=> {
  return (
<>
<Page1 />

<Industries/>
<ClientSlider/>
<OurServices/>
<ContactForm/>
</>
  );
};

export default UnitedStates;
