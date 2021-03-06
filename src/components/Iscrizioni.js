import React, { useState, useEffect } from "react";
import { FcCheckmark, FcCancel, FcBookmark } from "react-icons/fc";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import { Alert } from "react-bootstrap";

function formatIscrizione(cell, row) {
  if (row.isIscrizioneOk) {
    return <FcCheckmark size={32} />;
  } else {
    return <FcCancel size={32} />;
  }
}

function formatWithIcon(isCondition) {
  if (isCondition) {
    return <FcCheckmark size={32} />;
  } else {
    //return <FcCancel size={32} />;
    return null;
  }
}

function formatCaparra(cell, row) {
  return formatWithIcon(row.isCaparra);
}

function formatSaldo(cell, row) {
  return formatWithIcon(row.isSaldo);
}

function formatCertificatoMedico(cell, row) {
  return formatWithIcon(row.isCertificatoMedico);
}

function formatBollinoCai(cell, row) {
  return formatWithIcon(row.isBollinoCai);
}

function formatNoleggio(cell, row) {
  if (row.isNoleggio) {
    return <FcBookmark size={32} />;
  }
  return null;
}

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

function rendererExpandRow(row) {
  let variant = null;
  let messages = [];
  if (row.isIscrizioneOk) {
    variant = "success";
    messages.push("Iscrizione ok");
  } else {
    variant = "danger";
    if (!row.isCaparra) {
      messages.push("Caparra mancante");
    }
    if (!row.isSaldo) {
      messages.push("Saldo mancante");
    }
    if (!row.isCertificatoMedico) {
      messages.push("Certificato medico mancante");
    }
    if (!row.isBollinoCai) {
      messages.push("Bollino Cai mancante");
    }
  }

  return (
    <Alert key={row.id} variant={variant}>
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
    </Alert>
  );
}

const expandRow = {
  renderer: rendererExpandRow,
  showExpandColumn: true,
};

const Iscrizioni = ({ iscrizioni }) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      hidden: true,
      headerSortingStyle,
    },
    {
      dataField: "stato",
      text: "stato",
      formatter: formatIscrizione,
      align: "center",
      headerAlign: "center",
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
      expandRow={expandRow}
    />
  );
};

export default Iscrizioni;
