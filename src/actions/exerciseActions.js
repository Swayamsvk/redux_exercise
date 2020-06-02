import { FETCH_EXERCISES} from '../actions/types';

export const fetchExercises = () => dispatch => {
   
        fetch('http://localhost:5000/exercises/')
        .then(res => res.json())
        .then(exercises => dispatch({
          type: FETCH_EXERCISES,
          payload: exercises  
        }));
    
}