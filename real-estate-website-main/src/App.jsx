import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/Header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import SignUp from './routes/SignUp';
import Contact from './routes/Contact';
import Features from './routes/Features';
import AboutUs from './routes/AboutUs';
import EMICalculator from './routes/EMICalculator';
import Blog from './routes/Blog';
import FAQ from './routes/FAQ';
import PrivacyPolicy from './routes/PrivacyPolicy';
import Terms from './routes/Terms';
import Footer from './components/Footer'
import HouseProvider from './context/HouseContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import WhatsAppFloat from './components/WhatsAppFloat';

const App = () => {
  return (
    <HouseProvider>
      <Container maxW='container.lg' px='6'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='property-details' element={ <PropertyDetails /> } >
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/features' element={<Features />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/emi-calculator' element={<EMICalculator />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path="*"
                element={ <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                          </main>
                        }
          />
        </Routes>
      </Container>
      <Footer />
      <WhatsAppFloat />
    </HouseProvider>
  )
}

export default App