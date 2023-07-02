import { CURR_OTP, USER_DATA } from "./action";


const initState = {
    otp:"0000",
    user:{}
}

const reducer = (state=initState , action) =>{
    console.log('action',action);
    switch (action.type) {
        case CURR_OTP:
            return{
             ...state,
             otp: action.payload
            }
        case USER_DATA:
            return{
                ...state,
                user:action.payload
            }
    
        default:
            return state;
    }
}

export { reducer }