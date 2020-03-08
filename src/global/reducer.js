import ActionType from "./action-types";
import { addUser, removeUser, setAge, setName  } from "./helpers";

const Reducer = (state, action) => {
    switch (action.type) {
        case ActionType.SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case ActionType.SET_AGE:
            return {
                ...state,
                users: setAge(state.users, action.payload)
            }
        case ActionType.SET_NAME:
            return {
                ...state,
                users: setName(state.users, action.payload)
            }
        case ActionType.ADD_USER:
            return {
                ...state,
                users: addUser(state.users, action.payload)
            }
        case ActionType.REMOVE_USER:
            return {
                ...state,
                users: removeUser(state.users, action.payload)
            }
        case ActionType.SET_INITDATA:
            return {
                ...state,
                initFromAjax: [...state.initFromAjax, action.payload]
            }
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export default Reducer;