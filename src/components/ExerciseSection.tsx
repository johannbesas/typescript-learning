import React from 'react'
import { IState as IProps} from './Diary'

const ExerciseSection: React.FC<IProps> = ({ exercises }) => {

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

    return <>
        { renderRows()}
    </>
}

export default ExerciseSection
