import React, { useState } from 'react'
import ExerciseSection from './ExerciseSection'

interface IState {
    exercises: {
        exerciseName: string
        sets: number
        reps: number
        weight: string
    }[]
}

const Diary = () => {
    const [exercises, setExercises] = useState<IState["exercises"]>([
        {
            exerciseName: 'Deadlift',
            sets: 3,
            reps: 5,
            weight: '140kg'
        }
    ])

    return <div>
        <input></input>
        <table id='log'>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                <ExerciseSection exercises={exercises} />
            </tbody>
        </table>

        {/* <tr>
                    <td><input type="text" name='exerciseName' placeholder="Enter name of exercise" value={exerciseName} onChange={(e) => handleChange(e)}></input></td>
                    <td><input type="text" name='sets' placeholder="How many sets" value={sets} onChange={(e) => handleChange(e)}></input></td>
                    <td><input type="text" name='reps' placeholder="How many reps" value={reps} onChange={(e) => handleChange(e)}></input></td>
                    <td><input type="text" name='weight' placeholder="How much weight" value={weight} onChange={(e) => handleChange(e)}></input></td>
                </tr> */}
        <button >Add New Exercise</button>
        <button>Add New Exercise</button>
        <button>Save</button>
    </div>
}

export default Diary