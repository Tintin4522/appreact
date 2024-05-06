import 'bootstrap/dist/css/bootstrap.min.css';
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "./page.module.css";
import { Header } from './utils';
import { Footer } from './utils';
import 'font-awesome/css/font-awesome.min.css';

const nunito = Nunito_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "600"]
});

export const metadata = {
  title: "Mon CV en ligne",
  description: "Mon CV en ligne, regroupant mes réalisation ainsi que mes articles et qui permet d'entrer en contact avec moi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className='Container'>
        <Header></Header>
        <main className={nunito.className}>{children}</main>
        <Footer></Footer>
      </body>    
    </html>
  );
}

