import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../dasboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

const MainRoutes = (props) => (
  <div className="content-wrapper">
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/billingCycles" element={<BillingCycle />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  </div>
);

export default MainRoutes;
