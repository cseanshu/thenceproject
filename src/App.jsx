import { BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import AskQuestion from './components/askQuestion/AskQuestion'
import Congratulations from './components/congratulations/Congratulations'
import Footer from './components/footer/Footer'
import GetProject from './components/getProject/GetProject'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Animation from './components/animation/Animation'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/getProject' element={<GetProject/>}/>
        <Route path='/congratulations' element={<Congratulations/>}/>
      </Routes>
    </BrowserRouter>
      
    {/* <Animation/> */}
    </>
  )
}

export default App
