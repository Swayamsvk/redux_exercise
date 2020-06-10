import { FETCH_EXERCISES,NEW_EXERCISE,DELETE_EXERCISE, EDIT_EXERCISE} from '../actions/types';


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
        case DELETE_EXERCISE:
            return {
               ...state,
               items:state.items.filter(item => item.id !== action.payload)
            }
        case EDIT_EXERCISE:
            return {
                items: state.items.map(item => item.id ===action.payload.id ? action.payload :item)
            }
            
        default: 
        return state;
    }
}