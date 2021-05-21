import React from 'react'
import { IState as Props } from "../App"

interface IProps {
    exercises: Props['exercises']
}

const Diary: React.FC<IProps> = ({ exercises }) => {

    const renderRows = (): JSX.Element[] => {
        return exercises.map((exercise) => {
            return (
                <tr className='something'>
                    <td>{exercise.exerciseName}</td>
                    <td>{exercise.sets}</td>
                    <td>{exercise.reps}</td>
                    <td>{exercise.weight}</td>
                </tr>
            )
        })
    }

    return <div>
        <input></input>
        <table>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    </div>
}

export default Diary