import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import'../../node_modules/bootstrap/dist/js/bootstrap.bundle.min' 
import github from '../img/signe-github.png' 
import twitter from '../img/twitter.png' 
import linkedin from '../img/linkedin.png' 
import icon from '../img/apple-touch-icon.png' 
import React from 'react';
import '../../node_modules/bootstrap-icons/bootstrap-icons.svg'








const Contact = () => {
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

        <main id='background-contact'>

         
          <div class='container text-bg-light p-5 ' >
            
            <div class=' p-5'>
              <h1 class='text-center '> Me contacter</h1>
              <p class='text-center'>Pour me contacter en vue d'un entretien ou d'une future collaboration
                        , merci de remplir le formulaire de contact.
              </p>
            </div>
          <div class='row'>
            <div id='backgroud-form' class='col-md-6 col-lg-6 col-mb-12' >
              <div>
              <form class="g-3" >
                <h3 text-center>Formulaire de contact</h3>
                <div class="col m-3">
                  <input type="text" class="form-control" placeholder="Votre nom" aria-label="Last name"></input> 
                </div>
                <div class="col m-3">
                  <input type="email" class="form-control" id="inputEmail4" placeholder='Votre adresse email'></input>
                </div>
                <div class="col m-3">
                  <input type="number" class="form-control" id="inputNumber" placeholder="Votre numéro de téléphone"></input>
                </div>
                <div class="col m-3">
                  <input type="text" class="form-control" id="object" placeholder="Sujet"></input>
                </div>
                <div class="col m-3">
                  <textarea class="form-control" id='message' name='messsage' row='30' maxLength="1000" placeholder='Votre message'></textarea>
                </div>
                <div class="col m-3">
                  <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>
              </form>
            </div>
            </div>
            
            <div class='adresse col-md-6 col-lg-6 col-mb-12 '>
              <h3> Mes coordonées</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg><a href='https://www.google.com/maps/d/u/0/edit?mid=1oOm4mTQR6SQohuMYxtlqi-ZpN7-zE_c&usp=sharing'><adress>40 Rue Laure Diebold, 69009 Lyon,
                      France</adress></a><br/>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
              <a href="tel:0620304050">06 20 30 40 50</a>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462177!2d4.796403976122977!3d45.77866197108085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1734392705250!5m2!1sfr!2sfr" title='map' width="100%" height="350px">Une </iframe>
              
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

export default Contact;