import home1 from './assets/home1.svg'
import logo from './assets/logo.png'
import about2 from './assets/about2.svg'
import about_c1 from './assets/about_c1.svg'
import about_c2 from './assets/about_c2.svg'
import about_c3 from './assets/about_c3.svg'
import about_c4 from './assets/about_c4.svg'
import about_c5 from './assets/about_c5.svg'
import about_c6 from './assets/about_c6.svg'

import function_c1 from './assets/function_c1.svg'
import function_c2 from './assets/function_c2.svg'
import function_c3 from './assets/function_c3.svg'
import function_c4 from './assets/function_c4.svg'
import function_c5 from './assets/function_c5.svg'
import function_c6 from './assets/function_c6.svg'
import function_c7 from './assets/function_c7.svg'

function App() {

  return (
    <>
      <nav id='Nav'>
        <div className='nav-container'>
          <div className='nav-logo'>
            <img src={logo}/>
            <span>TechCoders</span>
          </div>
          {/* Botón para abrir y cerrar el nav */}
          <div className='nav-btn'>
          <label htmlFor="btn">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
              </svg>
            </label>
          </div>
          <input id='btn' name='btn' type='checkbox'/>
          {/* ================================ */}
          <div className='nav-links'>
            <ul>
              <li><a href='#Home'>Home</a></li>
              <li><a href='#About'>Quienes Somos</a></li>
              <li><a href='#Function'>Cómo funciona</a></li>
              <li><a className='btn btn-empezar' href='https://api.whatsapp.com/send/?phone=51904789672&text=Hola+Estoy+interesado+en+hacer+realidad+mi+proyecto&type=phone_number&app_absent=0' target='_blank'>EMPEZAR</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id='Home'>
        <div className='home-mock'></div>
        <div className='home-container'>
          <div className='home-information'>
            <span>¡Hola!</span> <span>Somos</span>
            <br/>
            <span>TechCoders</span>
            <br/>
            <span>Hacemos real tus ideas de tesis e investigaciones</span>
            <br/>
            <div className='btn btn-empezar'>
              <a href='https://api.whatsapp.com/send/?phone=51904789672&text=Hola+Estoy+interesado+en+hacer+realidad+mi+proyecto&type=phone_number&app_absent=0' target='_blank'>EMPEZAR</a>
            </div>
          </div>
          <img src={home1}/>
        </div>
      </section>

      <section id='About'>
        <div className='content'>
          <div className='about-container'>
            <img className='about-img' src={about2} />
            <div className='about-information'>
              <h1 className='title'><span>-</span><span> ¿Quiénes Somos?</span></h1>
              <p>
              Somos un equipo especializado en el desarrollo de aplicaciones web y móvil. Nos encargamos de hacer realidad los proyectos de investigación o las ideas innovadoras de emprendimiento que tengas en mente. Brindamos asesorías de las herramientas tecnológicas y los pasos que se deben seguir para poner en marcha tu proyecto.
              </p>
              <p>Ofrecemos:</p>
              <div className='about-cards'>
                <div className='about-card'>
                  Asesorías
                  <br/>
                  <img src={about_c1}/>
                </div>
                <div className='about-card'>
                  Diseño UX UI
                  <br/>
                  <img src={about_c2}/>
                </div>
                <div className='about-card'>
                  Base de datos
                  <br/>
                  <img src={about_c3}/>
                </div>
                <div className='about-card'>
                  Hosting
                  <br/>
                  <img src={about_c4}/>
                </div>
                <div className='about-card'>
                  Confianza
                  <br/>
                  <img src={about_c5}/>
                </div>
                <div className='about-card'>
                  Rapidez
                  <br/>
                  <img src={about_c6}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='Function'>
        <div className='content'>
        <h1 className='title'><span>-</span><span> ¿Cómo funciona?</span></h1>
        <div className='function-information'>
          <div className='function-step'>
            <span>1°</span>
            <span>Contáctanos</span>
            <img src={function_c1}/>
          </div>
          <div className='function-step'>
            <span>2°</span>
            <span>Especificamos los requerimientos</span>
            <img src={function_c2}/>
          </div>
          <div className='function-step'>
            <span>3°</span>
            <span>Explicamos cómo se realizará el proyecto</span>
            <img src={function_c3}/>
          </div>
          <div className='function-step'>
            <span>4°</span>
            <span>Presentamos una propuesta</span>
            <img src={function_c4}/>
          </div>
          <div className='function-step'>
            <span>5°</span>
            <span>Ponemos en marcha el proyecto</span>
            <img src={function_c5}/>
          </div>
          <div className='function-step'>
            <span>6°</span>
            <span>Presentación del proyecto</span>
            <img src={function_c6}/>
          </div>
          <div className='function-step'>
            <span>7°</span>
            <span>Explicación técnica</span>
            <img src={function_c7}/>
          </div>
        </div>
        </div>
      </section>

      <section id="Footer">
        <div className='content'>
          <div className='title'>Encuéntranos</div>
          <div className='footer-container'>
            <div>
              <a href='https://www.linkedin.com/in/luissancheztapia98/' target='_blank'>
                 <svg
                   fill="currentColor"
                   viewBox="0 0 16 16"
                   height="1em"
                   width="1em"
                 >
                   <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                 </svg>
               </a>
            </div>
            <div>
              <a href='https://www.linkedin.com/in/jose-daniel-puicon-braco-18407b182/' target='_blank'>
                 <svg
                   fill="currentColor"
                   viewBox="0 0 16 16"
                   height="1em"
                   width="1em"
                 >
                   <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                 </svg>
               </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        Created by <a href='#' target='_blank'>TechCoders</a> | 2022 Copyright © All Rights Reserved
      </footer>
    </>
  )
}

export default App

