import './resume.css'

function Resume() {
    
    return (
        <div className='resume'>
            <h1>Resume</h1>
            <span className='aboutDivider'></span>

            <h2>Working Experience</h2>
            <ul>
                <li>Impacto SEO</li>
                <p className='descriptions'>Competence in web design and usability, proficiency in HTML, CSS, and PHP, basic database management, basic web file management, technical SEO skills, and the ability to manage and resolve errors.</p>
                <span>Abril 2024 - Actually</span>

                <li>Zenith</li>
                <p className='descriptions'>I am part of a group of young programmers who develop our own projects from scratch. We collaborate independently to hone our skills and grow professionally through hands-on experience.</p>
                <span>Septiembre 2024 - Actually</span>
            </ul>

            <h2 className='resumeTitles'>Languages</h2>
            <ul>
                <li>Español</li>
                <span>Nativo</span>

                <li>English B2</li>
                <span>2021 UCAM, Online</span>

                <li>Italiano B1</li>
                <span>2022 Euroinnova, Online</span>
            </ul>

            <h2 className='resumeTitles'>Education</h2>
            <ul>
                <li>FP Grado Medio Microinfórmatica y Redes.</li>
                <span>2014 - 2016 IES Alarifes, Fuentes de Andalucía.</span>

                <li>Ciclo Formativo Superior Fotografía.</li>
                <span>2017 - 2019 UCAM, Online.</span>

                <li>Titulación Superior en Diseño Gráfico y Desarrollo Web.</li>
                <span>2021 - 2024 CEI Escuela de Diseño y Marketing, Sevilla.</span>
            </ul>

            <h2 className='resumeTitles'>Certificates</h2>
            <ul>
                <li>Maestría en CSS</li>
                <span>2024 Udemy</span>

                <li>Experto en Angular y Typescript</li>
                <span>Studying</span>
            </ul>

        </div>
    )

}

export default Resume