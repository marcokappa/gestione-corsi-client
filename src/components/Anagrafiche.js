import React, { useState, useEffect } from "react";
import { FcCheckmark, FcCancel, FcBookmark } from "react-icons/fc";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";

const headerSortingStyle = { backgroundColor: "#c8e6c9" };

const sessoOptions = {
  M: "M",
  F: "F",
};

const defaultSorted = [
  {
    dataField: "cognome",
    order: "asc",
  },
];

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    console.log(`clicked on row with index: ${rowIndex}`);
  },
  onMouseEnter: (e, row, rowIndex) => {
    console.log(`enter on row with index: ${rowIndex}`);
  },
};

const Anagrafiche = ({ anagrafiche }) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      hidden: true,
      headerSortingStyle,
    },

    {
      dataField: "cognome",
      text: "cognome",
      sort: true,
      headerSortingStyle,
      filter: textFilter(),
    },
    {
      dataField: "nome",
      text: "nome",
      sort: true,
      headerSortingStyle,
      filter: textFilter(),
    },

    {
      dataField: "sesso",
      text: "sesso",
      sort: true,
      headerSortingStyle,
      formatter: (cell) => sessoOptions[cell],
      filter: selectFilter({
        options: sessoOptions,
      }),
    },
    {
      dataField: "eta",
      text: "età",
      sort: true,
      headerSortingStyle,
    },
    {
      dataField: "isCaparra",
      text: "caparra",
      formatter: formatCaparra,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "isSaldo",
      text: "saldo",
      formatter: formatSaldo,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "isCertificatoMedico",
      text: "cert. medico",
      formatter: formatCertificatoMedico,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "isBollinoCai",
      text: "bollino CAI",
      formatter: formatBollinoCai,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "isNoleggio",
      text: "noleggio",
      formatter: formatNoleggio,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={iscrizioni}
      columns={columns}
      striped
      hover
      defaultSorted={defaultSorted}
      filter={filterFactory()}
      rowEvents={rowEvents}
    />
  );
};

export default Anagrafiche;
