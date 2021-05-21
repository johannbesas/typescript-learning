import React, { useState } from 'react'

const AddNewExercise = () => {

    const [input, setInput] = useState({
        exerciseName: '',
        sets: '',
        reps: '',
        weight: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {

    }

    return (
        <div>
            <input
                type='text'
                placeholder='exercise'
                className='AddNewExercise-input'
                value={input.exerciseName}
                name='exerciseName'
                onChange={handleChange}
            />

            <input
                type='text'
                placeholder='sets'
                className='AddNewExercise-input'
                value={input.sets}
                name='sets'
                onChange={handleChange}
            />

            <input
                type='text'
                placeholder='reps'
                className='AddNewExercise-input'
                value={input.reps}
                name='reps'
                onChange={handleChange}
            />

            <input
                type='text'
                placeholder='weight'
                className='AddNewExercise-input'
                value={input.weight}
                name='weight'
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add New Exercise</button>
        </div>
    )
}

export default AddNewExercise