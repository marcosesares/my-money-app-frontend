import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import { bindActionCreators } from "redux";

import Grid from "../common/layout/grid";
import IconButton from "../common/template/iconButton";
import Input from "../common/form/input";
import {
  billingCycleForm,
  STYLE_SUCCESS,
  STYLE_WARNING,
  STYLE_DANGER,
} from "../common/constants/constants";
import If from "../common/template/if";

class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert(billingCycleForm, this.props.field, index, item);
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove(billingCycleForm, this.props.field, index);
    }
  }

  renderRows() {
    const list = this.props.list.length > 0 ? this.props.list : [{}];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${this.props.field}[${index}].name`}
            component={Input}
            placeholder="Inform the name"
            readOnly={this.props.readOnly}
          ></Field>
        </td>
        <td>
          <Field
            name={`${this.props.field}[${index}].value`}
            component={Input}
            placeholder="Inform the value"
            readOnly={this.props.readOnly}
          ></Field>
        </td>
        <If test={this.props.showStatus}>
          <td>
            <Field
              name={`${this.props.field}[${index}].status`}
              component={Input}
              placeholder="Inform the status"
              readOnly={this.props.readOnly}
            ></Field>
          </td>
        </If>
        <td>
          <IconButton
            style={STYLE_SUCCESS}
            icon="plus"
            type="button"
            onClick={() => this.add(index + 1)}
          />
          <IconButton
            style={STYLE_WARNING}
            icon="clone"
            type="button"
            onClick={() => this.add(index + 1, item)}
          />
          <IconButton
            style={STYLE_DANGER}
            icon="trash-o"
            type="button"
            onClick={() => this.remove(index, item)}
          />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
        </fieldset>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <If test={this.props.showStatus}>
                <th>Status</th>
              </If>
              <th className="table-actions">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);
