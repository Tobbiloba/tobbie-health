// import HomePage from "./components/Homepage";
// import Menu from "./components/Menu";
// import { useEffect, useState } from 'react';
// function App() {


//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const sections = document.getElementsByClassName('section');
//     window.addEventListener('scroll', () => {
//       let current = '';
//       for (let i = 0; i < sections.length; i++) {
//         const section = sections[i];
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
//           current = section.getAttribute('id');
//         }
//       }
//       setActiveSection(current);
//     });
//   }, []);
//   console.log(activeSection)

//   const handleScroll = (target) => {
//     const element = document.querySelector(target);
//     element.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   };
//   return (
//     <div>
//       <Menu activeSection={activeSection} handleScroll={handleScroll} />
//       <HomePage id="home" className="section" />
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import HomePage from "./components/Homepage";
import Menu from "./components/Menu";
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Doctors from './components/Doctors';

function App() {

  const [activeSection, setActiveSection] = useState('home'); // Set initial state to 'home'

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    // console.log(sections)
    window.addEventListener('scroll', () => {
      let current = '';
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      }
      setActiveSection(current);
    });
  }, []);
  // console.log(activeSection)

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className=''>
      <Menu activeSection={activeSection} handleScroll={handleScroll} />
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="specialists">
        <Services />
      </section>
      {/* <section id="doctors">
        <Doctors />
      </section> */}
    </div>
  );
}

export default App;
// With this modification, the activeSection state is initially set to "home", so the section with an id attribute of "home" will be highlighted when the page is first loaded.






