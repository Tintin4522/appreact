
import "../page.module.css";
import Image from "next/image";



export default function RealisationPage() {
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
                <h2 className="PageTitle">Portfolio</h2>
                <p className="PageDescription">Voici quelques-unes de mes réalisations.</p>
                <div>    
                    <div className="Separateur"></div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Image className="ImgRow" 
                        src="/img/portfolio/fresh-food.jpg" 
                        alt="image de légumes dans un plat"
                        width={300}
                        height={200}/>
                        <h3 className="TitleCase">Fresh food</h3>
                        <p className="TextRow">Réalisation d&apos;un site avec commande en ligne</p>
                        <button className="buttonVoir">Voir</button>
                        <div className="col-sm2">
                            <p>site réalisé avec php et MySQL</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <Image className="ImgRow" 
                        src="/img/portfolio/restaurant-japonais.jpg" 
                        alt="image de sushis dans un plat"
                        width={300}
                        height={200}/>
                        <h3 className="TitleCase">Restaurant Akira</h3>
                        <p className="TextRow">Réalisation d&apos;un site vitrine</p>
                        <button className="buttonVoir">Voir</button>
                        <div className="col-sm2">
                            <p>site réalisé avec WordPress</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <Image className="ImgRow" 
                        src="/img/portfolio/espace-bien-etre.jpg" 
                        alt="image d'inspiration ambiance zen"
                        width={300}
                        height={200}/>
                        <h3 className="TitleCase">Espace bien-être</h3>
                        <p className="TextRow">Réalisation d&apos;un site vitrine pour un pratricien de bien-être</p>
                        <button className="buttonVoir">Voir</button>
                        <div className="col-sm2">
                            <p>site réalisé en HTML/CSS</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}