import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Content from "./../common/template/content";
import BillingCycleList from "./billingCycleList";
import ContentHeader from "./../common/template/contentHeader";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "./../common/tab/tabContent";
import BillingCycleForm from "./billingCycleForm";
import {
  TAB_LIST,
  TAB_CREATE,
  TAB_UPDATE,
  TAB_DELETE,
} from "../common/constants/constants";
import {
  createBillingCycle,
  updateBillingCycle,
  deleteBillingCycle,
  init,
} from "./billingCycleActions";

class BillingCycle extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { createBillingCycle, updateBillingCycle, deleteBillingCycle } =
      this.props;
    return (
      <div>
        <ContentHeader title="Payment Cycle" small="Register" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="List" icon="bars" target={TAB_LIST} />
              <TabHeader label="Add" icon="plus" target={TAB_CREATE} />
              <TabHeader label="Update" icon="pencil" target={TAB_UPDATE} />
              <TabHeader label="Remove" icon="trash-o" target={TAB_DELETE} />
            </TabsHeader>
            <TabsContent>
              <TabContent id={TAB_LIST}>
                <BillingCycleList />
              </TabContent>
              <TabContent id={TAB_CREATE}>
                <BillingCycleForm
                  onSubmit={createBillingCycle}
                  submitClass="primary"
                  submitLabel="Save"
                />
              </TabContent>
              <TabContent id={TAB_UPDATE}>
                <BillingCycleForm
                  onSubmit={updateBillingCycle}
                  submitClass="info"
                  submitLabel="Update"
                />
              </TabContent>
              <TabContent id={TAB_DELETE}>
                <BillingCycleForm
                  onSubmit={deleteBillingCycle}
                  submitClass="danger"
                  submitLabel="Delete"
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createBillingCycle,
      updateBillingCycle,
      deleteBillingCycle,
      init,
    },
    dispatch
  );
export default connect(null, mapDispatchToProps)(BillingCycle);
