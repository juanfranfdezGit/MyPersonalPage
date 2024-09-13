import './content.css';
import { useState } from 'react';
import About from './about'
import Resume from './resume'
import Works from './works';

function Content() {

  const [activeBTN, setActiveBTN] = useState('button1');

  function handleClick(btn) {
    setActiveBTN(btn);
  }

  const renderContent = () => {
    switch (activeBTN) {
      case 'button1':
        return <About/>;
      
      case 'button2':
        return <Resume/>;

      case 'button3':
        return <Works/>

      default:
        return null;
    }
  }

    return (
      <div className='content-container'>

        <nav className='flex'>
          <button className={activeBTN === 'button1' ? 'btnActive' : ''} onClick={() => handleClick('button1')}>About</button>
          <button className={activeBTN === 'button2' ? 'btnActive' : ''} onClick={() => handleClick('button2')}>Resume</button>
          <button className={activeBTN === 'button3' ? 'btnActive' : ''} onClick={() => handleClick('button3')}>Works</button>
        </nav>

        <div>
          {renderContent()}
        </div>

      </div>
    )
  }
  
  export default Content