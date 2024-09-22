import './App.css';
import HomeScreen from './screens/HomeScreen';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import AllProductList from './components/AllProductList';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<AllProductList />} />
          <Route path="/products/:id" element={<ProductDetailsScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;