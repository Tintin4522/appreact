"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Accordion } from '../utils';
import { TitlePage } from '../utils';


export default function Mentions() {
    return (
      <main> 
        <TitlePage />
        <Accordion /> 
      </main>
    );
  }