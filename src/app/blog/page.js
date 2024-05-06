
import "../page.module.css";
import Image from "next/image";

export default function BlogPage() {
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
                <h2 className="PageTitle">Blog</h2>
                <p className="PageDescription">Retrouvez ici quelques articles sur le développement web</p>
                <div>    
                    <div className="Separateur"></div>
                </div>
                    <div className="divContentBlog">
                        <div className="col3">
                            <Image className="ImgCol" 
                            src="/img/blog/coder.jpg" 
                            alt="image de lignes de codes"
                            width={300}
                            height={200}/>
                            <h3 className="Titleblog">Coder son site en HTML/CSS</h3>
                            <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                            <button className="buttonLire">Lire la suite</button>
                            <div className="col-sm2">
                                <p>Publié le 22 août 2022</p>
                            </div>
                        </div>
                        <div className="col3">
                            <Image className="ImgCol" 
                            src="/img/blog/croissance.jpg" 
                            alt="image de plantes dans des pots de pièce de monnaie"
                            width={300}
                            height={200}/>
                            <h3 className="TitleBlog">Vendre ses produits sur le web</h3>
                            <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                            <button className="buttonLire">Lire la suite</button>
                            <div className="col-sm2">
                                <p>Publié le 20 août 2022</p>
                            </div>
                        </div>
                        <div className="col3">
                            <Image className="ImgCol" 
                            src="/img/blog/google.jpg" 
                            alt="image d'un ordinateur portable'"
                            width={300}
                            height={200}/>
                            <h3 className="TitleBlog">Se positionner sur Google</h3>
                            <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                            <button className="buttonLire">Lire la suite</button>
                            <div className="col-sm2">
                                <p>Publié le 1 août 2022</p>
                            </div>
                        </div>
                        <div className="col3">
                            <Image className="ImgCol" 
                            src="/img/blog/screens.jpg" 
                            alt="image avec plusieurs ordinateurs"
                            width={300}
                            height={200}/>
                            <h3 className="TitleBlog">Coder en responsive design</h3>
                            <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                            <button className="buttonLire">Lire la suite</button>
                            <div className="col-sm2">
                                <p>Publié le 31 juillet 2022</p>
                            </div>
                        </div>
                        <div className="col3">
                            <Image className="ImgCol" 
                            src="/img/blog/seo.jpg" 
                            alt="image avec beaucoup de mot du secteur de l'informatique avec mise en avant de SEO"
                            width={300}
                            height={200}/>
                            <h3 className="TitleBlog">Technique de référencement</h3>
                            <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                            <button className="buttonLire">Lire la suite</button>
                            <div className="col-sm2">
                                <p>Publié le 30 juillet 2022</p>
                            </div>
                        </div>
                        <div className="col3">
                            <Image className="ImgCol" 
                            src="/img/blog/technos.png" 
                            alt="image avec les différents logo de langages informatique"
                            width={300}
                            height={200}/>
                            <h3 className="TitleBlog">Apprendre à coder</h3>
                            <p className="TextRow">Some quick example text build on the card title and make up the bulk of the card&apos;s content.</p>
                            <button className="buttonLire">Lire la suite</button>
                            <div className="col-sm2">
                                <p>Publié le 12 juillet 2022</p>
                            </div>
                        </div>
                    </div>
            </main>
        </div>

    );
}
