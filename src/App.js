import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import QuizResult from './screens/QuizResult';
import QuizSection from './screens/QuizSection';


function App() {

  const [questions, setQuestions] = useState()
  const [name, setName] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )

    setQuestions(data.results);
  }




  return (
    <>
      <Header />
      <Routes>

        <Route exact path='/' element={
          <Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />
        } />

        <Route exact path='/quizsection' element={
          <QuizSection
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        } />

        <Route exact path='/quizresult' element={
          <QuizResult
            name={name}
            score={score}
          />
        } />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
