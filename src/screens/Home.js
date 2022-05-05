import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizImgSvg1 from '../assets/QuizImage-01.svg';
import Categories from '../Data/Categories';


const Home = ({ name, setName, fetchQuestions }) => {

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true)
            return
        } else {
            setError(false)
            fetchQuestions(category, difficulty)
            navigate("/quizsection")
        }
    }








    return (
        <div className='flex flex-row items-center justify-evenly h-screen'>

            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-3xl'>
                    Quiz Settings
                </h1>

                <TextField
                    required
                    label="Enter Your Name"
                    variant="outlined"
                    className='w-96'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    required
                    select
                    label="Select Category"
                    variant="outlined"
                    className='w-96'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {Categories.map((cat) => (
                        <MenuItem key={cat.category} value={cat.value}>
                            {cat.category}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    required
                    select
                    label="Select Difficulty"
                    variant="outlined"
                    className='w-96'
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <MenuItem key="Easy" value="easy">
                        Easy
                    </MenuItem>
                    <MenuItem key="Medium" value="medium">
                        Medium
                    </MenuItem>
                    <MenuItem key="Hard" value="hard">
                        Hard
                    </MenuItem>
                </TextField>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleSubmit}
                >
                    Start Quiz
                </Button>

            </div>

            <div className=''>
                <img className='w-96' src={QuizImgSvg1} />
            </div>

        </div>
    )
}

export default Home;