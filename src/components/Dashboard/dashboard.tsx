import React, { Component } from "react";
import ArticleOfDay from "./articleOfDay";
import DashboardStat from "./dashboardStat";

export default class Dashboard extends Component {
  render() {
    return (
      <div id="grid-wrapper">
        <ArticleOfDay />
        <DashboardStat />
      </div>
    );
  }
}
