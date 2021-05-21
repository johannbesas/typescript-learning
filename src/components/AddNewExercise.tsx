import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
    exercises: Props['exercises']
    setExercises: React.Dispatch<React.SetStateAction<Props['exercises']>>
}

const AddNewExercise: React.FC<IProps> = ({exercises, setExercises}) => {

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
        if ( !input.exerciseName || !input.sets ||
            !input.reps ||!input.weight
        ) {
            return
        }

        setExercises([
            ...exercises,
            {
                exerciseName: input.exerciseName,
                sets: parseInt(input.sets),
                reps: parseInt(input.reps),
                weight: input.weight
            }
        ])

        setInput({
            exerciseName: '',
            sets: '',
            reps: '',
            weight: ''
        })
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