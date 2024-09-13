import './sidebar.css';
import cvimage from '../assets/Foto.jpg';
import mailIco from '../assets/mailIco.png';
import phoneIco from '../assets/phoneIco.png';
import locationIco from '../assets/locationIco.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Sidebar() {

    return (
      <div className="sidebar flex">
        
        <div className='myinfo flex'>
            <img src={cvimage} alt='cv-image'></img>
            <h1 className='name'>Juan Francisco Romero Fdez</h1>
            <h2 className='job'>Front-End Developer</h2>
            <span className='divider'></span>
        </div>

        <div className='contact-container flex'>

            <div className='contact flex'>
                <img src={mailIco}></img>
                <div>
                    <h3>E-mail</h3>
                    <p>jfranromfdez@gmail.com</p>
                </div>   
            </div>

            <div className='contact flex'>
                <img src={phoneIco}></img>
                <div>
                    <h3>Phone</h3>
                    <p>651 099 662</p>
                </div>   
            </div>

            
            <div className='contact flex'>
                <img src={locationIco}></img>
                <div>
                    <h3>Location</h3>
                    <p>Sevilla, Spain</p>
                </div>   
            </div>

        </div>

        <div className='socials flex'>
            <a href='https://github.com/juanfranfdezGit' target='_blank'><img src={github}></img></a>
            <a href='https://www.linkedin.com/in/juan-francisco-romero-fernandez-928526225/' target='_blank'><img src={linkedin}></img></a>
        </div>

      </div>
    )
  }
  
  export default Sidebar