
import { ImageHome, ImageProfil, ProgressBars } from "./utils";

export default function Home() {
  return (
    <main> 
      <ImageHome />
      <div id="homePage" className="homePage">        
        <div className="containerHome">
          <div className="containerApropos">
            <div className="apropos">
              <h3><strong>A propos</strong></h3>
              <div className="Separateur2"></div>
              <p>Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi une formation 
                d&apos;<strong>intégrateur-développeu web</strong> au CEF. Au cours de cette formation, j&apos;ai 
                pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
              </p>
              <p>Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour
                consolider ma formation de<strong> développeur web full stack</strong>.
              </p>
              <p>J&apos;accorde une attention particulière à la qualité du code que j&apos;écris et je respecte les bonnes 
                pratiques du web.
              </p>
            </div>
          </div>
          <div className="containerProfil">
            <div className="containerProfilImage"><ImageProfil /></div>
            <h3><strong>Mes compétences</strong></h3>
            <ProgressBars />
          </div>
        </div>
      </div>
    </main>
  );
}
