import ContactForm from "../formulaire";
import "../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Localisation } from "../utils";


export default function AboutPage() {
    return (
        <div>
            <main>
                <div className="backAbout">
                <div className="fond">
                <div className="contactPage">
                <h2 className="PageTitle">Me contacter</h2>
                <p className="PageDescription">Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.</p>
                <div>    
                    <div className="Separateur"></div>
                </div>                
                <div className="containerContact">
                    <div className="contactForm">
                        <h3><strong>Formulaire de contact</strong></h3>
                        <div className="Separateur2"></div>
                    </div>
                    <div className="coordonnees">
                        <h3><strong>Mes coordonnées</strong></h3>
                        <div className="Separateur2"></div>
                    </div>
                </div>
                <div className="containerContact">
                    <div className="contactForm">                        
                        <ContactForm />
                    </div>
                    <div className="coordonnees">
                        <p><i className="fa-solid fa-map-marker-alt"></i>40 Rue Laure Diebold, 69009 Lyon, France</p>
                        <p><i className="fa-solid fa-mobile-screen"></i>06 20 30 40 50</p>
                        <Localisation />
                    </div>
                </div>
                </div>
                </div>
                </div>
            </main>
        </div>

    );
}
