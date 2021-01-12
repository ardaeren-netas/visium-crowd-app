import React, { Component } from "react";
import ArticleOfDay from "./articleOfDay";
import DashboardDevices from "./dashboardDevices";
import DashboardStat from "./dashboardStat";
import JobBoard from "./jobBoard";
import TestCycle from "./testCycle";
import TestCycleBoard from "./testCycleBoard";

export default class Dashboard extends Component {
  render() {
    return (
      <div id="grid-wrapper">
        <ArticleOfDay />
        <DashboardStat />
        <DashboardDevices />
        <JobBoard />
        <TestCycleBoard />
      </div>
    );
  }
}
