import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { init } from "./billingCycleActions";
import { billingCycleForm } from "../common/constants/constants";
import LabelAndInput from "./../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
  calculateSummary() {
    const summary = (total, value) => total + value;
    return {
      sumOfCredits: this.props.credits
        .map((credit) => +credit.value || 0)
        .reduce(summary, 0),
      sumOfDebts: this.props.debts
        .map((debt) => +debt.value || 0)
        .reduce(summary, 0),
    };
  }
  render() {
    const {
      handleSubmit,
      submitClass,
      submitLabel,
      readOnly,
      init,
      credits,
      debts,
    } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome"
            cols="12 4"
            placeholder="Inform the billing Name"
          />
          <Field
            name="month"
            component={LabelAndInput}
            readOnly={readOnly}
            type="number"
            label="Month"
            cols="12 4"
            placeholder="Inform the billing Month"
          />
          <Field
            name="year"
            component={LabelAndInput}
            readOnly={readOnly}
            type="number"
            label="Year"
            cols="12 4"
            placeholder="Inform the billing Year"
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
          <ItemList
            cols="12 6"
            readOnly={readOnly}
            list={credits}
            field="credits"
            legend="Credits"
          />
          <ItemList
            cols="12 6"
            readOnly={readOnly}
            list={debts}
            field="debts"
            legend="Debits"
            showStatus={true}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${submitClass}`}>
            {submitLabel}
          </button>
          <button type="button" className="btn btn-default" onClick={init}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: billingCycleForm,
  destroyOnUnmount: false,
})(BillingCycleForm);

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
const selector = formValueSelector(billingCycleForm);
const mapStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
