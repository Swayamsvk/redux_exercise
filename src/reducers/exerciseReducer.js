import { FETCH_EXERCISES,NEW_EXERCISE,EDIT_EXERCISE} from '../actions/types';


const initialState ={
    items: [],
    item:{}
};

export default function(state = initialState,action) {
    switch(action.type){
        case FETCH_EXERCISES:
            return {
                ...state,
                items: action.payload
            }
        case NEW_EXERCISE:
            return {
                ...state,
                item:action.payload
            }
        case EDIT_EXERCISE:
            const index = state.findIndex(data => data._id === action.payload._id);
            if(index > -1) {
                return state.map(data => {
                    if(data._id === action.payload._id) return action.payload;
                    return data
                })
            } else {
                return {
                    ...state,
                    item:action.payload
                }
            }
        default: 
        return state;
    }
}