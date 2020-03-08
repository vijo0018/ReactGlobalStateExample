import { useStore } from './store';
import ActionType from './action-types';

export const useUser = () => {
    const { state, dispatch } = useStore();
    return {
        users: state.users,
        add: (x) => dispatch({type: ActionType.ADD_USER, payload: x}),
        remove: (x) => dispatch({type: ActionType.REMOVE_USER, payload: x}),
        setName: (x) => dispatch({type: ActionType.SET_NAME, payload: x}),
        setAge: (x) => dispatch({type: ActionType.SET_NAME, payload: x}),
    }
}
 
export const useExtra = () => {
    const { state, dispatch } = useStore();
    return {
        title: state.title,
        setTitle: (x) => dispatch({type: ActionType.SET_TITLE, payload: x}),

        initFromAjax: state.initFromAjax,
        setInit: (x) => dispatch({type: ActionType.SET_INITDATA, payload: x}),
    }
}