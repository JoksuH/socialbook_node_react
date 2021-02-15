

const INITIAL_STATE = {
    curUser: [],
}

const userReducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'ADD_USER') {
        state = action.data
    }
    if (action.type === 'REMOVE_USER') {
        state = []
    }
        console.log(state)
        return state;
    
}

export default userReducer