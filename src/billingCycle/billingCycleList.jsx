import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  TAB_UPDATE,
  TAB_DELETE,
  STYLE_WARNING,
  STYLE_DANGER,
} from "../common/constants/constants";
import IconButton from "../common/template/iconButton";
import { getBillingCyclesList, showTab } from "./billingCycleActions";

class BillingCycleList extends Component {
  componentDidMount() {
    this.props.getBillingCyclesList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((billingCycle) => (
      <tr key={billingCycle._id}>
        <td>{billingCycle.name}</td>
        <td>{billingCycle.month}</td>
        <td>{billingCycle.year}</td>
        <td>
          <IconButton
            style={STYLE_WARNING}
            icon="pencil"
            onClick={() => this.props.showTab(billingCycle, TAB_UPDATE)}
          />
          <IconButton
            style={STYLE_DANGER}
            icon="trash-o"
            onClick={() => this.props.showTab(billingCycle, TAB_DELETE)}
          />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Month</th>
            <th>Year</th>
            <th className="table-actions">Actions</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getBillingCyclesList, showTab: showTab }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
