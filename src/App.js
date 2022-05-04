import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import QuizResult from './screens/QuizResult';
import QuizSection from './screens/QuizSection';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/quizsection' element={<QuizSection />} />
        <Route exact path='/quizresult' element={<QuizResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
