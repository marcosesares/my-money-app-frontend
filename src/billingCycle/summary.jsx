import React from "react";
import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

const Summary = ({ credit, debt }) => {
  return (
    <Grid cols="12">
      <fieldset>
        <legend>Summary</legend>
        <Row>
          <ValueBox
            cols="12 4"
            color="green"
            icon="bank"
            value={`$${credit}`}
            text="Total Credits"
          />
          <ValueBox
            cols="12 4"
            color="red"
            icon="credit-card"
            value={`$${debt}`}
            text="Total Debits"
          />
          <ValueBox
            cols="12 4"
            color="blue"
            icon="money"
            value={`$${credit - debt}`}
            text="Consolidated"
          />
        </Row>
      </fieldset>
    </Grid>
  );
};
export default Summary;
