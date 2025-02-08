import "./App.css";
import LandingPage from "./component/LandingPage";
import Bussiness from './component/Bussiness'
import CompanyLogo from "./component/CompanyLogo";
import ChooseMobionizer from "./component/chooseMobionizer";
import Testimonials from "./component/Testimonials";
import ContactSection from "./component/ContactSection";
import ContactForm from "./component/ContactForm";
import NewsBlogSection from "./component/NewsBlogSection";
import MobionizerBanner from "./component/MobionizerBanner";


function App() {
  return (
    <div className="bg-gray-50">
      <LandingPage />
      <Bussiness />
      <CompanyLogo />
      <ChooseMobionizer />
      <Testimonials />
      <ContactSection />
      <ContactForm />
      <NewsBlogSection />
      <MobionizerBanner />
    </div>
  )
}

export default App
