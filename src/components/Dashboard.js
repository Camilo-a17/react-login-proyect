import React from "react";
import DataTable from "./DataTable";
import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Conteo de votos</h1>
      <div className="row">
        <div className="col-md-6">
          <Form />
        </div>
        <div className="col-md-6">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
