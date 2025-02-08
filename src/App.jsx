import "./App.css";
import LandingPage from "./component/LandingPage";
import Bussiness from './component/Bussiness'
import CompanyLogo from "./component/CompanyLogo";
import ChooseMobionizer from "./component/chooseMobionizer";
import Testimonials from "./component/Testimonials";
import ContactSection from "./component/ContactSection";
import ContactForm from "./component/ContactForm";


function App() {
  return (
    <div>
      <LandingPage />
      <Bussiness />
      <CompanyLogo />
      <ChooseMobionizer />
      <Testimonials />
      <ContactSection />
      <ContactForm />
    </div>
  )
}

export default App
