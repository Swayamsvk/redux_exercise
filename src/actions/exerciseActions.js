import { FETCH_EXERCISES,NEW_EXERCISE,DELETE_EXERCISE,EDIT_EXERCISE } from '../actions/types';


export const fetchExercises = () => dispatch => {
   
        fetch('http://localhost:5000/exercises/')
        .then(res => res.json())
        .then(exercises => dispatch({
          type: FETCH_EXERCISES,
          payload: exercises  
        }));
    
}

export const createExercises = (exerciseData) => dispatch => {
    console.log("action called");
    fetch('http://localhost:5000/exercises/add',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(exerciseData)
    })
    .then(res => res.json())
    .then(exercise =>  dispatch({
      type: NEW_EXERCISE,
      payload: exercise  
    }));
}

export const deleteExercises = (id) => dispatch => {
  console.log("action called");
  fetch(`http://localhost:5000/exercises/${id}`,{
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(id =>  dispatch({
    type: DELETE_EXERCISE,
    payload: id  
  }));
}

export const editExercises = item => dispatch => {
  console.log("action called");
  fetch(`http://localhost:5000/exercises/update/${item._id}`,{
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(res => res.json())
  .then(data =>  dispatch({
    type: EDIT_EXERCISE,
    payload: data  
  }));
}