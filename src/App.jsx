import './App.css'
import Blog from './component/Blog'
import Header from './component/Header'
import Home from './component/Home'
import {Routes, Route} from 'react-router-dom'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
