import axios from "axios";
import { toast } from "react-toastify";
import { initialize } from "redux-form";

import { showTabs, selectTab } from "../common/tab/tabActions";
import { SUCCESS_MESSAGE } from "../common/constants/messageConstants";
import {
  BILLING_CYCLES_FETCHED,
  BASE_URL,
  billingCycleForm,
  TAB_LIST,
  TAB_CREATE,
} from "../common/constants/constants";

const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getBillingCyclesList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request,
  };
}

export function createBillingCycle(values) {
  return submit(values, "post");
}

export function updateBillingCycle(values) {
  return submit(values, "put");
}

export function deleteBillingCycle(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  const id = values._id ? values._id : "";
  return (dispatch) => {
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then((response) => {
        toast.success(SUCCESS_MESSAGE);
        dispatch(init());
      })
      .catch((error) => {
        error.response.data.errors.forEach((error) => toast.error(error));
      });
  };
}

export function showTab(billingCycle, tab) {
  return [
    showTabs(tab),
    selectTab(tab),
    initialize(billingCycleForm, billingCycle),
  ];
}

export function init() {
  return [
    showTabs(TAB_LIST, TAB_CREATE),
    selectTab(TAB_LIST),
    getBillingCyclesList(),
    initialize(billingCycleForm, INITIAL_VALUES),
  ];
}
