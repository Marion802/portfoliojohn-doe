import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import'../../node_modules/bootstrap/dist/js/bootstrap.bundle.min' 
import github from '../img/signe-github.png' 
import twitter from '../img/twitter.png' 
import linkedin from '../img/linkedin.png' 
import icon from '../img/apple-touch-icon.png' 
import React from 'react';
import banner from '../img/banner.jpg'
import ordi from '../img/ordinateur.png'
import balise from '../img/balise-html.png'
import loupe from '../img/loupe.png'



const Services = () => {
        return (
          <div>
            <header> 
            <nav class="navbar navbar-expand-lg p-3 bg-secondary"> 
              <div class="container-fluid row"> 
                <div class="row"> 
                  <article class="col-lg-8"> 
                <a class="navbar-brand text-white " href="/"><img src={icon} alt='icon'></img></a> 
                  </article> 
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span class="navbar-toggler-icon text-white"></span> 
                  </button> 
              <div class="collapse navbar-collapse col-lg-1 " id="navbarNavAltMarkup"> 
                  <article class=""> 
                    <ul class="navbar-nav"> 
                      <li class="nav-item"> 
                      <a class="nav-link active text-white" aria-current="page" href="/">ACCEUIL</a> 
                      </li> 
                      <li class="nav-item"> 
                      <a class="nav-link text-white" href="/services">SERVICES</a> 
                      </li> 
                      <li class="nav-item"> 
                      <a class="nav-link text-white" href="/rea">REALISATIONS</a> 
                      </li> 
                      <li class="nav-item"> 
                      <a class="nav-link text-white" href="/blog">BLOG</a> 
                      </li> 
                      <li class="nav-item"> 
                      <a class="nav-link text-white" href="/contact">ME CONTACTER</a> 
                      </li> 
                      </ul> 
                      </article> 
                    </div> 
                  </div> 
                  </div> 
                </nav>
            </header>
            <main>
              
              <div id='banner'>
                <img src={banner} alt="banner" />
              </div>
              <div class="text-center">
                <h1>MON OFFRE DE SERVICES</h1>
                <h5>Voici les prestations sur lesquels je peux intervenir</h5>
              </div>
              
              <div class="container row m-5 p-2 mx-auto service ">
                <div class="card col-lg-3 col-md-4 col-mb-12 p-2 m-5">
                  <img src={ordi} class="card-img-top" alt="ordinateur"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">UX DESIGN</h5>
                    <p class="card-text"> L'UX Design est une 
                    methode de conception centré sur l'utilisateur. Son but est d'offrir une 
                    experience de navigation optimale à l'internaute.</p>
                  </div>
                </div>
  
                <div class="card col-lg-3 col-md-4 col-mb-12 p-2 m-5 ">
                  <img src={balise} class="card-img-top" alt="balise"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">DEVELOPPEMENT WEB</h5>
                    <p class="card-text">Le développement de site web repose
                    sur l'utilisation des langages HTML? CSS JavaScript et PHP. </p>
                  </div>
                </div>

                <div class="card col-lg-3 col-md-4 col-mb-12 p-2 m-5">
                  <img src={loupe} class="card-img-top" alt="loupe"/>
                  <div class="card-body text-center">
                    <h5 class="card-title">REFERENCEMENT </h5>
                    <p class="card-text">Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des 
                    techniques en oeuvre pour améliorer sa position dans les résultats des 
                    moteurs de recherches.</p>
                  </div>
                </div>
              </div>
            </main>
            
            
            
            
            
            
            
            <footer>
            <div class="container text-center"> 
              <div class="row align-items-start"> 
                <div class="col-lg-3 col-md-6 lh-1"> 
                  <h5 class="fw-semibold">John Doe</h5> 
                  <p>40 Rue Laure Diedbold</p> 
                  <p>69009 Lyoon, France</p> 
                  <p>Téléphone : 06 20 30 40 50</p> 
                  <a href='https://github.com/Marion802'><img src={github} alt="github"></img></a> 
                  <a href='https://x.com/MarionSermande'><img src={twitter} alt='twitter'></img></a> 
                  <a href='https://www.linkedin.com/in/marion-sermande-1a3208307/'><img src={linkedin} alt='linkedin'></img></a> 
                </div> 
                <div class="col-lg-3 col-md-6 lh-1" > 
                  <h5 class="fw-semibold">Liens utiles</h5> 
                  <p><a href='/'>Acceuil</a></p> 
                  <p><a href='#apropos'>A propos</a></p> 
                  <p><a href='/services'>Services</a></p> 
                  <p><a href='/contact'>Me contacter</a></p> 
                  <p><a href='/mentions'>Mentions légales</a></p> 
                </div> 
                <div class="col-lg-3 col-md-6 lh-1"> 
                  <h5 class="fw-semibold">Mes dernières réalisations</h5> 
                  <p><a href='/rea'>Fresh food</a></p> 
                  <p><a href='/rea'>Restaurant Akira</a></p> 
                  <p><a href='/rea'>Espace bien être</a></p> 
                </div> 
                <div class="col-lg-3 col-md-6 lh-1"> 
                  <h5 class="fw-semibold"> Mes derniers articles</h5> 
                  <p><a href='/blog'>Coder son site en HTML/CSS</a></p> 
                  <p><a href='/blog'>Vendre ses produits sur le web</a></p> 
                  <p><a href='/blog'>Se prosionner sur Google</a></p> 
                </div> 
              </div> 
            </div> 
            <div class="text-center p-3 mb-2 bg-dark text-white"> 
              <a href='#top'><copiryght><p>Designed by John Doe</p></copiryght></a> 
            </div> 
          </footer>
          </div>




        )


}

export default Services;