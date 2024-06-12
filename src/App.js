import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portal from './pages/Portal';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import ProductPage from './Components/ProductPage';

function App() {
	return (
		<>
		
			<Routes>
        <Route path='/' element={<Portal/>}>
             <Route index  element={<Home/>}/>
             <Route path='about' element={<About/>}/>
              <Route path='product' element={<Product/>}/>
                <Route path='product/:productId' element={<ProductPage/>}/>
              <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
		</>
	);
}

export default App;
