import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import'../../node_modules/bootstrap/dist/js/bootstrap.bundle.min' 
import github from '../img/signe-github.png' 
import twitter from '../img/twitter.png' 
import linkedin from '../img/linkedin.png' 
import icon from '../img/apple-touch-icon.png' 
import React from 'react';
import banner from '../img/banner.jpg'
import code from '../img/blog/coder.jpg'
import croissance from '../img/blog/croissance.jpg'
import google from '../img/blog/google.jpg'
import screen from '../img/blog/screens.jpg'
import seo from '../img/blog/seo.jpg'
import techno from '../img/blog/technos.png'


const Blog = () => {
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

              <div id='banner'>
                <img src={banner} alt="banner" />
              </div>

            <main>

              <div class='text-center m-5'>
                <h1>BLOG</h1>
                <p>Retrouvez ici quelques articles sur le développement web</p>
              </div>

              <div class='row'>
              <div class="card col-lg-3 col-md-6 col-mb-12 m-5 text-center" >
                  <img src={code} class="card-img-top " id='img-fresh' alt="code"></img>
                  <div class="card-body">
                    <h5 class="card-title text-center">Coder son site en HTML/CSS</h5>
                    <p class="card-text text-center">Some quick example text on the card title and make up the bulk of the card's content</p>
                    <a href={code} class="btn btn-outline-primary ">Lire la suite</a>
                  </div>
                  <div class="card-footer">
                    <p>Publié le 22 août 2022</p>
                  </div>
                </div>
                <div class="card col-lg-3 col-md-6 col-mb-12 m-5 text-center">
                  <img src={croissance} class="card-img-top" id='img-resto' alt="pièces"></img>
                    <div class="card-body">
                      <h5 class="card-title text-center">Vendre ses produits sur le web</h5>
                      <p class="card-text text-center">Some quick example text on the card title and make up the bulk of the card's content</p>
                      <a href={croissance} class="btn btn-outline-primary ">Lire la suite</a>
                    </div>
                  <div class="card-footer">
                    <p>Publié le 20 août 2022</p>
                  </div>
                </div>
                <div class="card col-lg-3 col-md-6 col-mb-12 m-5 text-center">
                  <img src={google} class="card-img-top" id='img-espace' alt="espace zen"></img>
                  <div class="card-body">
                    <h5 class="card-title text-center">Se positionner sur Google</h5>
                    <p class="card-text text-center">Some quick example text on the card title and make up the bulk of the card's content</p>
                    <a href={google} class="btn btn-outline-primary ">Lire la suite</a>
                  </div>
                  <div class="card-footer">
                    <p>Publié le 1 août 2022</p>
                  </div>
                </div>
                <div class="card col-lg-3 col-md-6 col-mb-12 m-5 text-center" >
                  <img src={screen} class="card-img-top " id='img-fresh' alt="aliment"></img>
                  <div class="card-body">
                    <h5 class="card-title text-center">Coder en responsive design</h5>
                    <p class="card-text text-center">Some quick example text on the card title and make up the bulk of the card's content</p>
                    <a href={screen} class="btn btn-outline-primary ">Lire la suite</a>
                  </div>
                  <div class="card-footer">
                    <p>Publié le 31 juillet 2022</p>
                  </div>
                </div>
                <div class="card col-lg-3 col-md-6 col-mb-12 m-5 text-center">
                  <img src={seo} class="card-img-top" id='img-resto' alt="aliment"></img>
                    <div class="card-body">
                      <h5 class="card-title text-center">Techniques de référencement </h5>
                      <p class="card-text text-center">Some quick example text on the card title and make up the bulk of the card's content</p>
                      <a href={seo} class="btn btn-outline-primary ">Lire la suite</a>
                    </div>
                  <div class="card-footer">
                    <p>Publié le 30 juillet 2022</p>
                  </div>
                </div>
                <div class="card col-lg-3 col-md-6 col-mb-12 m-5 text-center">
                  <img src={techno} class="card-img-top" id='img-espace' alt="espace zen"></img>
                  <div class="card-body">
                    <h5 class="card-title text-center">Apprendre à coder</h5>
                    <p class="card-text text-center">Some quick example text on the card title and make up the bulk of the card's content</p>
                    <a href={techno} class="btn btn-outline-primary ">Lire la suite</a>
                  </div>
                  <div class="card-footer">
                    <p>Publié le 12 juillet 2022</p>
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

export default Blog;
