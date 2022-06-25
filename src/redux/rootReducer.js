import { combineReducers } from "redux";
import HomeReducer from "../modules/homeScreen/homeReducer";
import CategoryReducer from "../modules/categoryScreen/categoryReducer";
const rootReducer=combineReducers({
    HomeReducer,
    CategoryReducer
})

export default rootReducer