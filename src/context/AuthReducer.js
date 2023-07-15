const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":{
        return{
            currentUser: action.payload,
            userData:action.payload1,
        };
    }
    case "LOGOUT":{
        return {
            currentUser:null,
        }
    }
    default:
        return state;
    }
};

export default AuthReducer;