import { type } from "@testing-library/user-event/dist/type";
import { userActionConstants } from "./actionTypes"
export const userDataInitiate = () => ({
    type: userActionConstants.USERS_DATA_INITIATE,
});
export const userDataSuccess = (data) => {
    // console.log(data);
    return ({

        type: userActionConstants.USERS_DATA_SUCCESS,
        payload: data
    });
}

export const userDataFailure = (data) => ({
    type: userActionConstants.USERS_DATA_FAILURE,
    payload: data
});