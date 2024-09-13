import './about.css'
import Html from '../assets/Html.webp'
import Css from '../assets/Css.webp'
import Sass from '../assets/sass.png'
import Java from '../assets/Java.png'
import ReactLog from '../assets/React.png'
import NodeLog from '../assets/Node.png'
import Sql from '../assets/Sql.png'
import Mongo from '../assets/mongo.png'
import Figma from '../assets/figma.png'
import Adobe from '../assets/Adobe.png'
import Angular from '../assets/angular.png'
import Wordpress from '../assets/wordpress.png'

function About() {
    
    return (
        <div className="about">
            <h1>About Me</h1>
            <span className='aboutDivider'></span>
            <p>Hi, I'm Juan Francisco Romero Fdez. <br></br><br></br>Frontend Developer specializing in creating dynamic and responsive web applications. My favorite technology is React, but I’m also proficient in Angular and Vue, allowing me to adapt to various project needs and deliver high-quality user experiences across different frameworks.</p>
            <br></br>
            <p>I thrive on challenges and am always eager to tackle any obstacles that come my way, viewing them as opportunities to learn and grow. My goal is to continually develop my skills, both professionally and personally, while contributing to innovative projects that make a meaningful impact.</p>
        
            <h2>Technologies</h2>
            <p>I specialize in frontend development with a strong command of various frameworks and tools.</p>

            <div className='techs flex'>
                <ul className="flex">
                    <li className="flex"><div className='imgContainer'><img src={Html} alt="html"></img></div><p>HTML</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Css} alt="css"></img></div><p>CSS</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Sass} alt="sass"></img></div><p>SASS</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Java} alt="java"></img></div><p>JAVASCRIPT</p></li>
                    <li className="flex"><div className='imgContainer'><img src={ReactLog} alt="react"></img></div><p>REACT</p></li>     
                    <li className="flex"><div className='imgContainer'><img src={Angular} alt="angular"></img></div><p>ANGULAR</p></li>     
                    <li className="flex"><div className='imgContainer'><img src={NodeLog} alt="node"></img></div><p>NODEJS</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Sql} alt="sql"></img></div><p>SQL</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Mongo} alt="mongo"></img></div><p>MONGODB</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Figma} alt="figma"></img></div><p>FIGMA</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Adobe} alt="adobe"></img></div><p>ADOBETOOLS</p></li>
                    <li className="flex"><div className='imgContainer'><img src={Wordpress} alt="wordpress"></img></div><p>WORDPRESS</p></li>
                </ul>
            </div>
         </div>
    )
}

export default About;