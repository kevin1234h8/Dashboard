import React from "react";
import datas from "../data/customer.json";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
const Table = () => {
  return (
    <div>
      <DataTable
        value={datas.data}
        responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        dataKey="id"
        paginator
        emptyMessage="No data Found"
        className="datatable-responsive"
        currentPageReportTemplate="{first} to {last} of {totalRecords} member"
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
      >
        <Column field="id" header="Id" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="company" header="Company" sortable></Column>
        <Column field="date" header="Date" sortable></Column>
        <Column field="activity" header="Activity" sortable></Column>
        <Column field="balance" header="Balance" sortable></Column>
        <Column field="status" header="Status" sortable></Column>
      </DataTable>
    </div>
  );
};

export default Table;
