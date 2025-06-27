import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutTable from './WorkoutTable';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);

  const addWorkout = (newWorkout) => {
    const existingIndex = workouts.findIndex(w => w.date === newWorkout.date);
    if (existingIndex !== -1) {
    
      const updatedWorkouts = [...workouts];
      updatedWorkouts[existingIndex].distance += newWorkout.distance;
      setWorkouts(updatedWorkouts);
    } else {
    
      setWorkouts([...workouts, newWorkout].sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
  };

  const deleteWorkout = (date) => {
    setWorkouts(workouts.filter(w => w.date !== date));
  };

  const editWorkout = (workout) => {
    setEditingWorkout(workout);
  };

  const updateWorkout = (updatedWorkout) => {
    setWorkouts(workouts.map(w => w.date === updatedWorkout.date ? updatedWorkout : w)
      .sort((a, b) => new Date(b.date) - new Date(a.date)));
    setEditingWorkout(null);
  };

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      <WorkoutForm 
        addWorkout={addWorkout} 
        editingWorkout={editingWorkout}
        updateWorkout={updateWorkout}
      />
      <WorkoutTable 
        workouts={workouts} 
        deleteWorkout={deleteWorkout}
        editWorkout={editWorkout}
      />
    </div>
  );
}

export default App;