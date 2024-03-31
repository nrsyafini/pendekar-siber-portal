import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'; // Import the arrow icon from react-icons library

const CyberbullyingPage = () => {
  const whatRef = useRef(null);
  const impactRef = useRef(null);
  const controlsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto p-8">
      <div className="frame rounded-lg shadow-md p-8">
        <Link to="/CyberSafetyModule" className="block text-center mb-8 rounded-lg py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
          <BsArrowLeft className="inline-block mr-2" /> Back to CyberSafety Modules
        </Link>
        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            <li onClick={() => scrollToSection(whatRef)}>
              <Link to="#" className="navigation-link">What</Link>
            </li>
            <li onClick={() => scrollToSection(impactRef)}>
              <Link to="#" className="navigation-link">Impact</Link>
            </li>
            <li onClick={() => scrollToSection(controlsRef)}>
              <Link to="#" className="navigation-link">Controls</Link>
            </li>
          </ul>
        </nav>
        <section ref={whatRef} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What is Cyberbullying</h2>
          <p>Cyberbullying is a pervasive issue in today's digital age, characterized by the use of electronic communication to harass, intimidate, or harm others. It takes various forms, including spreading rumors, sharing embarrassing or manipulated photos or videos, or sending threatening messages.<br></br><br></br> Unlike traditional bullying, cyberbullying can occur 24/7 and reach a wide audience instantly, making it particularly insidious and difficult to escape. The fact is that cyberbullying happens more often than we think, and some of the most severe cases lead to the loss of lives.</p><br></br>
          <ul>
            <li>It can lead to emotional distress, anxiety, and depression.</li>
            <li>It may affect academic performance and social relationships.</li>
            <li>It can escalate to physical violence in some cases.</li>
          </ul>
        </section>
        <section ref={impactRef} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Impact of Cyberbullying</h2>
          <p>Cyberbullying can have severe consequences on individuals and communities.</p>
          <ul>
            <li>It can lead to low self-esteem and self-worth.</li>
            <li>It may cause social withdrawal and isolation.</li>
            <li>It can result in long-term psychological effects.</li>
          </ul>
        </section>
        <section ref={controlsRef}>
          <h2 className="text-3xl font-bold mb-4">Controls for Cyberbullying</h2>
          <p>Various measures can be taken to prevent and address cyberbullying.</p>
          <ul>
            <li>Implement strict policies against cyberbullying in schools and workplaces.</li>
            <li>Educate individuals about responsible online behavior and digital citizenship.</li>
            <li>Provide support and resources for victims of cyberbullying.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CyberbullyingPage;
