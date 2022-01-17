import { combineReducers } from "redux";
import DashboardReducer from "../dasboard/dashboardReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";
import TabReducer from "../common/tab/tabReducer";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "../auth/authReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  auth: AuthReducer,
});

export default rootReducer;
