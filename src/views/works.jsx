import './works.css';
import starShower from '../assets/starShower.png';
import Gas from '../assets/gas.png';
import reactLogo from '../assets/React.png'
import Html from '../assets/Html.webp'
import Css from '../assets/Css.webp'

function Works() {

    return (
        <div className='works'>
            <h1>Works</h1>
            <span className='aboutDivider'></span>

            <div className='works-container'>
                <div className='flex'>
                    <div className='work'>
                        <a href='https://gasblog.vercel.app/' target="_blank" rel="noreferrer" className='work-links'>Gas! Blog</a>
                        <img src={Gas} alt='GasBlog'></img>
                        <div className='workTech'>
                            <img src={reactLogo} alt='react'></img>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <div className='work'>
                        <a href='https://starshowereffect.netlify.app/' target="_blank" rel="noreferrer" className='work-links'>Star Shower</a>
                        <img src={starShower} alt='starShower'></img>
                        <div className='workTech'>
                            <img src={Html} alt='html'></img>
                            <img src={Css} alt='css'></img>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Works;