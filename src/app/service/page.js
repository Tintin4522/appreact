
import "../page.module.css";
import Image from "next/image";

export default function ServicePage() {
    return (
        <div>
            <main>
                <picture className="Img">
                    <source media="(max-width: 600px" srcSet="/img/banner-mobile.jpg" />
                    <source media="(min-width: 601px" srcSet="/img/banner-tablette.jpg" />
                    <Image className="ImgDetails" 
                    src="/img/banner.jpg" 
                    alt="image de jeux de lumière blue" 
                    width={1400}
                    height={150}/>
                </picture> 
                <h2 className="PageTitle">Mon offre de services</h2>
                <p className="PageDescription">Voici les prestations sur lesquelles je peux intervenir</p>
                <div>    
                    <div className="Separateur"></div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Image className="ImgRow" 
                        src="/img/display.png" 
                        alt="dessin d'un écran"
                        width={32}
                        height={32}/>
                        <h3 className="TitleCase">UX DESIGN</h3>
                        <p className="TextRow">L&apos;<strong>UX Design</strong> est une méthode de conception centrée sur l&apos;utilisateur. Son but est d&apos;offrir une expérience de navigation optimale à l&apos;internaute</p>
                    </div>
                    <div className="col-sm">
                        <Image className="ImgRow" 
                        src="/img/file-code.png" 
                        alt="dessin d'une feuille de code"
                        width={32}
                        height={32}/>
                        <h3 className="TitleCase">Développement WEB</h3>
                        <p className="TextRow">Le <strong>développement de site web</strong> repose sur l&apos;utilisation des languages HTML, CSS, JavaScript et PHP.</p>
                    </div>
                    <div className="col-sm">
                        <Image className="ImgRow" 
                        src="/img/glass-dollar.png" 
                        alt="dessin d'une loupe"
                        width={32}
                        height={32}/>
                        <h3 className="TitleCase">Référencement</h3>
                        <p className="TextRow">Le <strong>Référencement naturel d&apos;un site,</strong>aussi appelé SEO, consiste à mette des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche. </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
