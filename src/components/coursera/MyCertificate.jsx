import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MyCertificate.css';


const MyCertificate = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="certificates-main">
      <h1 className="section-title" data-aos="fade-up" data-aos-duration="1000">
        My Certificates
      </h1>

      <div className="certificates-container">

        {/* Certificate 1 */}
        <div className="certificate" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src="/certificates/DevOpsCertificate.PNG" alt="Introduction to DevOps" />
          <div className="certificate-details">
            <h2>Introduction to DevOps</h2>
            <p>IBM</p>
            <p><strong>Issued:</strong> 2025</p>
            <a href="https://coursera.org/share/9df04959694e8f369a09f661f1cb100c" className="btn">
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="certificate" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
          <img src="/certificates/AI Certificate.PNG" alt="Introduction to Artificial Intelligence" />
          <div className="certificate-details">
            <h2>Introduction to Artificial Intelligence</h2>
            <p>IBM</p>
            <p><strong>Issued:</strong> 2025</p>
            <a href="https://coursera.org/share/575e3ee8cd972cfa23788269f17c316e" className="btn">
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="certificate" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src="/certificates/Capture4.PNG" alt="Continuous Delivery and DevOps" />
          <div className="certificate-details">
            <h2>Continuous Delivery and DevOps</h2>
            <p>University of Virginia</p>
            <p><strong>Issued:</strong> 2025</p>
            <a href="https://coursera.org/share/37c64136357d463c8900306185437a5a" className="btn">
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 4 */}
        <div className="certificate" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
          <img src="/certificates/Capture3Certificate.PNG" alt="Cloud Native, DevOps, Agile and NoSQL" />
          <div className="certificate-details">
            <h2>Cloud Native, DevOps, Agile and NoSQL</h2>
            <p>Coursera</p>
            <p><strong>Issued:</strong> 2025</p>
            <a href="https://coursera.org/share/9f23bfd8753f7d267a5e7a8b927c28d0" className="btn">
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 5 */}
        <div className="certificate" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src="/certificates/chatbot1.PNG" alt="Building AI Powered Chatbots without Programming" />
          <div className="certificate-details">
            <h2>Building AI Powered Chatbots without Programming</h2>
            <p>Coursera</p>
            <p><strong>Issued:</strong> 2024</p>
            <a href="https://coursera.org/share/e96db0c44159f6394e63acce9838ad4e" className="btn">
              View Certificate
            </a>
          </div>
        </div>

        {/* Certificate 6 */}
        <div className="certificate" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
          <img src="/certificates/GenerativeAI.PNG" alt="Generative AI: Prompt Engineering Basics" />
          <div className="certificate-details">
            <h2>Generative AI: Prompt Engineering Basics</h2>
            <p>Coursera</p>
            <p><strong>Issued:</strong> 2025</p>
            <a href="https://www.credly.com/badges/d0bc6a69-a53c-4b17-955b-741e2340af6f" className="btn">
              View Certificate
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default MyCertificate;
