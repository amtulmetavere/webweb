import 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import ScrollToTopButton from './components/scrolltotop'
function App() {
  

  return (
    <div className="bg-[#000000] min-h-screen">
    <Header/>
    <Home/>
    <ScrollToTopButton/>
  
    <Footer/>
    </div>
  )
}

export default App
