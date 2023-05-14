import React from 'react'
import '../style/About_section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Atharva_r from '../images/atharva_r.jpg';
import Atharva_s from '../images/atharva_s.jpg';
import Rucha from '../images/rucha.jpeg';
import Pratham from '../images/pratham.jpg';
import Dhore_sir from '../images/dhore_sir.jpg';
export default function About() {
  return (
    <>
       <section className="team">
        <h1>OUR TEAM</h1>
        <center><p>Our team for creating a website on digital marketing services consists of experienced professionals with a deep understanding of the industry. From web designers to content writers to SEO experts, each team member brings a unique set of skills to the table. Together, we work collaboratively to create a website that not only looks visually appealing but also delivers high-quality content and engages with the audience effectively. Our team is dedicated to providing a seamless user experience and ensuring that the website meets the specific needs of our clients. We believe in staying up-to-date with the latest trends and technologies in digital marketing, and this is reflected in the work we produce. With a strong focus on creativity, innovation, and excellence, we strive to exceed our clients' expectations and deliver exceptional results.</p></center>
    <div className="team-container">
        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={Rucha} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>Rucha Uplenchwar</h4>
                    <h5>Student</h5>
                </div>
                <div className="sci">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={Pratham} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>Pratham Gajbhiye</h4>
                    <h5>Student</h5>
                </div>
                <div className="sci">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={Atharva_r} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>Atharva Rathi</h4>
                    <h5>Student</h5>
                </div>
                <div className="sci">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={Atharva_s} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>Atharva Sonawane</h4>
                    <h5>Student</h5>
                </div>
                <div className="sci">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="content">
                <div className="imgBx">
                    <img src={Dhore_sir} alt=""/>
                </div>
                <div className="contentBx">
                    <h4>Manikrao Dhore</h4>
                    <h5>Professor</h5>
                </div>
                <div className="sci">
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>
    </div>
    </section> 
    </>
  )
}
