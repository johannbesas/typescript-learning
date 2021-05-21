import React, { useState } from 'react'
//Components
import Diary from './components/Diary'
import AddNewExercise from './components/AddNewExercise'
export interface IState {
  exercises: {
    exerciseName: string
    sets: number
    reps: number
    weight: string
  }[]
}

function App() {
  const [exercises, setExercises] = useState<IState['exercises']>([
    {
      exerciseName: 'Deadlift',
      sets: 3,
      reps: 5,
      weight: '140kg'
    },
    {
      exerciseName: 'Bent Over Row',
      sets: 3,
      reps: 12,
      weight: '70kg'
    },
    {
      exerciseName: 'Seated Dumbell Row',
      sets: 3,
      reps: 12,
      weight: '30kg'

    }
  ])

  return (
    <>
      <Diary exercises={exercises} />
      <AddNewExercise exercises={exercises} setExercises={setExercises} />
    </>)
}

export default App
