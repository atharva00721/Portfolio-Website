import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import { AuroraBackgroundDemo } from "./components/Homeaurora";
import ProjectsTabs from "./components/Projects";
// import { ProfileForm } from "./components/ContactForm";
import { CardWithForm } from "./components/ContactForm";
// import WordChanger from "./components/wordschanger";

// import TerminalContact from "./components/test";

export default function App() {
  return (
    <>
      <div className="bg-sexyBlack">
        <Navbar />
        <AuroraBackgroundDemo />
        <AboutMe />
        <ProjectsTabs />
        <CardWithForm />
      </div>
    </>
  );
}
