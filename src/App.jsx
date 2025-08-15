import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./componenet/Navbar";
import Footer from "./componenet/Footer";

import LandingPage from "./pages/LandingPage.jsx";
import Enterprise from "./Enterprise/Enterprise.jsx";
import CandidateSourcing from "./Candidate-Sourcing/CandidateSourcing.jsx";
import ContingentWorkforce from "./Contingent-Workforce/ContingentWorkforce.jsx";
import TotalTalentSolution from "./Total-Talent-Solution/TotalTalentSolution.jsx";
import ProjectRpo from "./Project-RPO/ProjectRpo.jsx";
import OnDemandRpo from "./On-Demand-RPO/OnDemandRpo.jsx";
import HrSolution from "./HR-Solution/HrSolution.jsx";
import HiringEvent from "./Hiring-Events/HiringEvent.jsx";
import Banking from "./Banking/Banking.jsx";
import FinancialServices from "./Financial-Services/FinancialServices.jsx";
import HealthCare from "./HealthCare/HealthCare.jsx";
import Bpo from "./BPO/Bpo.jsx";
import Ites from "./ITES/Ites.jsx";
import Manufacturing from "./Manufacturing/Manufacturing.jsx";
import Logistics from "./Logistics/Logistics.jsx";
import SupplyChain from "./Supply-Chain/SupplyChain.jsx";
import InformationTechnology from "./Information-Technology/InformationTechnology.jsx";
import Insurance from "./Insurance/Insurance.jsx";
import TravelHospitality from "./Travel-Hospitality/TravelHospitality.jsx";
import UnitedStates from "./United-States/UnitedStates.jsx";
import Canada from "./Cananda/Cananda.jsx";
import Philippines from "./Philippines/Philippines.jsx";
import Uae from "./UAE/Uae.jsx";
import India from "./India/India.jsx";
import ContactForm from "./Contact-us/Contactus.jsx";
import About from "./About-us/About.jsx";
import ViewAll from "./View-all-Industries/ViewAll.jsx";
import ViewAllOur from "./View-all-Ourservices/ViewAll.jsx";
import Resource from "./About-us/Resource.jsx";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/services/enterprise" element={<Enterprise/>} />
        <Route path="/services/candidate-sourcing" element={<CandidateSourcing />} />
        <Route path="/services/contingent-workforce" element={<ContingentWorkforce/>} />
        <Route path="/services/total-talent" element={<TotalTalentSolution/>} />
        <Route path="/services/project-rpo" element={<ProjectRpo/>} />
        <Route path="/services/on-demand-rpo" element={<OnDemandRpo/>} />
        <Route path="/services/hr-solutions" element={<HrSolution/>} />
        <Route path="/services/hiring-events" element={<HiringEvent/>} />
        <Route path="/industries/banking" element={<Banking />} />
        <Route path="/industries/financial" element={<FinancialServices />} />
        <Route path="/industries/healthcare" element={<HealthCare/>} />
        <Route path="/industries/bpo" element={<Bpo />} />
        <Route path="/industries/ites" element={<Ites/>} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/logistics" element={<Logistics/>} />
        {/* Add more routes as needed */}
        <Route path="/industries/supply-chain" element={<SupplyChain />} />
        <Route path="/industries/it" element={<InformationTechnology/>} />
        <Route path="/industries/insurance" element={<Insurance/>} />
        <Route path="/industries/travel-hospitality" element={<TravelHospitality/>} />
        <Route path="/regions/us" element={<UnitedStates/>} />
        <Route path="/regions/canada" element={<Canada/>} />
        <Route path="/regions/philippines" element={<Philippines/>} />
        <Route path="/regions/uae" element={<Uae/>} />
        <Route path="/regions/india" element={<India/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/view-all-our" element={<ViewAllOur/>} />
        <Route path="/resources" element={<Resource />} />


        
        {/* Add more routes as needed */}
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
