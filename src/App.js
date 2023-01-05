import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Slide from "./components/Slide/Slide";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero /> 
      <Slide />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
      
    </div>
  );
}

export default App;
