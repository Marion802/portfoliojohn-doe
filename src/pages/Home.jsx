import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import hero from '../img/hero-bg.jpg' 
import john from '../img/john-doe-about.jpg' 
import'../../node_modules/bootstrap/dist/js/bootstrap.bundle.min' 
import github from '../img/signe-github.png' 
import twitter from '../img/twitter.png' 
import linkedin from '../img/linkedin.png' 
import icon from '../img/apple-touch-icon.png' 
import React from 'react';



const Home = () => {
    return (
        <div className='Home'>
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
            <div id="background" class="position-relative"> 
              <img src={hero} alt='joe'class="col-lg-12 img-fluid "></img> 
              <div class="position-absolute top-50 start-50 translate-middle"> 
                <h1 class="text-white">Bonjour je suis John Doe</h1> 
                <h2 class="text-white">Developpeur web full stack</h2> 
                <button type="button" class="btn btn-primary"><a href='#apropos' class="text-white">En savoir plus</a></button> 
              </div> 
            </div> 
            <div id='apropos' class="container m-5 p-5"> 
              <div class=""> 
                <div class="row"> 
                  <div class="col-md-6 col-lg-6 col-mb-12"> 
                    <h4>A propos</h4> 
                    
                      <p class="card-text "> Passionné par l'informatique et les nouvelles technologies, j'ai
                        suivi une formation d'intégrateur-développeur web au CEF. Au cours de cette formation 
                        j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web. 
                        </p> 
                        <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence  
                          digitale pour consolider ma formation de développeur web full stack.  
                          </p> 
                          <p>  j'accorde une attention particulière à la qualité du code  
                            que j'écris et que je respecte les bonnes pratique du web. 
                            </p>   
                      </div> 
                      <div class="col-md-6 col-lg-6 col-mb-12"> 
                        <img src={john} class="img-fluid rounded float-end m-4 p-2" alt="john"></img> 
                        
                        <div class='competences m-4 p-5'>
                          <h4 class='m-4'>Mes compétences</h4>

                          <div class='m-4'>
                            <p>HTML5 90%</p>
                          <div class="progress progone bg-danger" role="progressbar"  aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25">
                            <div class="progress-bar">
                            </div>
                          </div>
                          </div>

                          <div class='m-4'>
                            <p>CSS3 80%</p>
                          <div class="progress progtwo bg-info" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar ">
                            </div>
                          </div>
                          </div>

                          <div class='m-4'>
                            <p>JAVASCRIPT 70%</p>
                          <div class="progress progthree bg-warning" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar ">
                            </div>
                          </div>
                          </div>

                          <div class='m-4'>
                            <p>PHP 60%</p>
                          <div class="progress progfor bg-success" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" width="100%">
                            </div>
                          </div>
                          </div>

                          <div class='m-4'>
                            <p>REACT 50%</p>
                          <div class="progress progfive bg-primary" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="200">
                            <div class="progress-bar" width="75%">
                            </div>
                          </div>
                          </div>

                      </div>
                      
                      
                      
                      </div> 
                     
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

export default Home;