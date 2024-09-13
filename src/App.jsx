import Sidebar from './views/sidebar'
import Content from './views/content'
import './App.css'

function App() {

  return (
    <>
      <section className='flex main'>
        <Sidebar/>

        <Content/>
      </section>
    </>
  )
}

export default App
