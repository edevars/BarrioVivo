import React from "react";
import Layout from "../src/Components/Layout";
import SettingsContent from "../src/Components/Layout/SettingsContent";

const DashboardPage = () => {
  return (
    <Layout>
      <h1>Configuracion</h1>
      <SettingsContent />
    </Layout>
  );
};

export default DashboardPage;
