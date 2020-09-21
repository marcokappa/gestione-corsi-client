import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { FcCheckmark, FcHighPriority } from "react-icons/fc";
import BootstrapTable from "react-bootstrap-table-next";

function formatWithIcon(cell, row) {
  if (row.isCaparra) {
    return <FcCheckmark />;
  } else {
    return <FcHighPriority />;
  }
}

const Iscrizioni = ({ iscrizioni }) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      hidden: true,
    },
    {
      dataField: "nome",
      text: "nome",
      sort: true,
    },
    {
      dataField: "cognome",
      text: "cognome",
      sort: true,
    },
    {
      dataField: "sesso",
      text: "sesso",
      sort: true,
    },
    {
      dataField: "eta",
      text: "età",
      sort: true,
    },
    {
      dataField: "caparra",
      text: "caparra",
      formatter: formatWithIcon,
      align: "center",
    },
  ];

  return <BootstrapTable keyField="id" data={iscrizioni} columns={columns} />;
};

export default Iscrizioni;
