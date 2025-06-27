import React, { useState, useEffect } from 'react';

function WorkoutForm({ addWorkout, editingWorkout, updateWorkout }) {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  useEffect(() => {
    if (editingWorkout) {
      setDate(editingWorkout.date);
      setDistance(editingWorkout.distance.toString());
    }
  }, [editingWorkout]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingWorkout) {
      updateWorkout({ date, distance: parseFloat(distance) });
    } else {
      addWorkout({ date, distance: parseFloat(distance) });
    }
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Distance in km"
        step="0.1"
        min="0"
        required
      />
      <button type="submit">{editingWorkout ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default WorkoutForm;