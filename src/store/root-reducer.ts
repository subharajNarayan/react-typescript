import { AnyAction, combineReducers } from "redux";

import i18nextReducer from "./modules/i18n/i18n";
import loginReducer from "./modules/login/login";
import TokenService from "../services/jwt-token/jwt-token";
import outhReducer from "./modules/oauthservice";
import userDetails from "./modules/userDetails";

export const appReducer = combineReducers({
  i18nextData: i18nextReducer,
    loginData: loginReducer,
    outhService: outhReducer,
    userDetails,
});

export type RootState = ReturnType<typeof appReducer>;
type TState = ReturnType<typeof appReducer> | undefined;

export default function rootReducer(state: TState, action: AnyAction) {
    if (action.type === "USER_LOG_OUT") {
        state = undefined;
        try {
        } catch (err) {
            console.error("Logout Error", err);
        }
    }

    return appReducer(state, action);
};

export const logoutAction = () => {
    try {
        TokenService.clearToken();
    } catch (err) {
        console.error("LogOut Error", err);
    }

    return { type: "USER_LOG_OUT", payload: {} };
};