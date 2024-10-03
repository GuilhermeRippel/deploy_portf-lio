import { useState } from 'react'
import './styles/tailwind.css'
import LeftContent from './components/leftContent'
import NavBar from './components/navBar'
import AboutMe from './components/aboutMe'
import Tecnologies from './components/tecnologies'
import Projects from './components/projects'

function App() {
  const [currentContent, setCurrentContent] = useState('About Me')

  const renderSection = () => {
    switch(currentContent) {
      case 'About Me':
        return <AboutMe/>
      case 'Tecnologies':
        return <Tecnologies/>
      case 'Projects':
        return <Projects/>
      default:
        return <AboutMe/>
    }
  }

  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900 pt-2 pb-20 px-5 sm:pb-20 sm:pt-2 md:pb-20 md:pt-9 lg:px-24 lg:pb-24 lg:pt-16 overflow-hidden'>
      <NavBar setCurrentContent={setCurrentContent}></NavBar>
      <div className='w-full h-full bg-gray-950 rounded-b-lg flex flex-col lg:flex-row items-center justify-center gap-3 p-4 shadow-2xl'>
        <div className='w-full h-1/3 lg:h-full lg:w-1/3 bg-gray-800 flex flex-col items-center p-2'>
          <div className='w-full h-full bg-gray-950 flex flex-col items-center justify-around lg:px-1 lg:py-4 rounded-md'>
            <LeftContent></LeftContent>
          </div>
        </div>
        <div className='w-full h-3/4 lg:w-2/3 lg:h-full bg-gray-800 flex items-center justify-center p-2 overflow-auto'>
          <div className='w-full h-full bg-gray-950 p-3 flex flex-col gap-4 rounded-md overflow-auto'>
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

