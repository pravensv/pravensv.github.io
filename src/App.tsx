import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";
// import SectionWrapper from "/components/SectionWrapper/SectionWrapper";
import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import Background from "./components/Background/Background";

function App() {
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  // Types for section refs and the scroll function
  type SectionRef = { current: HTMLElement | null };

  interface ScrollToSection {
    (ref: SectionRef): void;
  }

  const scrollToSection: ScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Background />
      <Header
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          educationRef,
          experienceRef,
          projectsRef,
          skillsRef,
          contactRef
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>

              <SectionWrapper>
                <div ref={homeRef}><Home /></div>
              </SectionWrapper>

              <SectionWrapper>
                <div ref={educationRef}><Education /></div>
              </SectionWrapper>

              <SectionWrapper>
                <div ref={experienceRef}><Experience /></div>
              </SectionWrapper>

              <SectionWrapper>
                <div ref={projectsRef}><Projects /></div>
              </SectionWrapper>

              <SectionWrapper>
                <div ref={skillsRef}><Skills /></div>
              </SectionWrapper>

              <SectionWrapper>
                <div ref={contactRef} id="contact-section"><Contact /></div>
              </SectionWrapper>
            </>
          }
        />

        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
