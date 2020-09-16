export const userInitialState = {
    isAuthenticated: false
}
export const userReducer = (state, action) => {
    console.log("userReducer", action);
    switch (action.type) {
        case 'login': return { isAuthenticated: true, ...action.payload }
        case 'logout': return userInitialState
        default: return state
    }
};