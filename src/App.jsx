import './App.css'
import Navbar from './Components/Navbar'
import Carousel from './Components/Page1/Carousel/Carousel';
import Header from './Components/Page1/Header/Header';
import Section1 from './Components/Page1/Section1/Section1';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section1 />
      <Carousel />
    </div>
  )
}

export default App
