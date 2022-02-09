import { userActionConstants } from "./actionTypes";
const intialUser = {
    loader: false,
    data: [],
    error: ""
}

export const userReducer = (state = intialUser, action) => {

    const { type, payload } = action;
    switch (type) {
        case userActionConstants.USERS_DATA_INITIATE: {
            return ({
                ...state,
                loader: true
            });
        }
        case userActionConstants.USERS_DATA_SUCCESS: {
            // console.log(payload);
            return ({
                ...state,
                data: payload
            })
        }
        case userActionConstants.USERS_DATA_FAILURE: {
            return ({
                ...state,
                error: payload
            })
        }
        default:
            return state;
    }

} 