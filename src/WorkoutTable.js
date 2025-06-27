import React from 'react';

function WorkoutTable({ workouts, deleteWorkout, editWorkout }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Distance (km)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <tr key={workout.date}>
            <td>{workout.date}</td>
            <td>{workout.distance.toFixed(1)}</td>
            <td>
              <button onClick={() => editWorkout(workout)}>✎</button>
              <button onClick={() => deleteWorkout(workout.date)}>✘</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WorkoutTable;