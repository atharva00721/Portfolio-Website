import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { AuroraBackgroundDemo } from "./components/Homeaurora";
import ProjectsTabs from "./components/Projects";
import { ProfileForm } from "./components/ContactForm";

export default function App() {
  return (
    <>
      <div className="bg-sexyBlack pb-96">
        <Navbar />
        <AuroraBackgroundDemo />
        <AboutMe />
        <div className="bg-sexyBlack mb-50">
          <ProjectsTabs />
        </div>
        {/* <ProfileForm /> */}
      </div>
    </>
  );
}
