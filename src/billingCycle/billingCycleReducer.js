import { BILLING_CYCLES_FETCHED } from "../common/constants/constants";

const INITIAL_STATE = { list: [] };

const BillingCycleReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case BILLING_CYCLES_FETCHED:
      return { ...state, list: action.payload.data };
    default:
      return state;
  }
};
export default BillingCycleReducer;
