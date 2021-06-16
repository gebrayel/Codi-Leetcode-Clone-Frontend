import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CancelIcon from "@material-ui/icons/Cancel";
import Grid from "@material-ui/core/Grid";

const ProblemList = ({ rows }) => {
  const columns = [
    { id: "problem_id", label: "ID", minWidth: 100 },
    { id: "description", label: "Título", minWidth: 50 },
    {
      id: "difficulty",
      label: "Dificultad",
      minWidth: 100,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "solved",
      label: "Solucionado",
      minWidth: 100,
      align: "right",
      format: (value) => Boolean(value),
    },
    {
      id: "edit",
      label: "Editar",
      minWidth: 50,
      align: "right",
    },
  ];

  const useStyles = makeStyles({
    grid: {
      width: "100%",
    },
    root: {
      width: "100%",
      backgroundColor: "#7E84A7",
      fontWeight: "bold",
      "& .MuiTableCell-alignRight": {
        textAlign: "center",
      },
    },
    container: {
      width: "100%",
    },
  });

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid item xs={11} sm={11} md={11} lg={11} className={classes.grid}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#5E627D",
                      color: "white",
                      fontSize: "18px",
                      "font-weight": "bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];

                        if (column.id === "solved") {
                          if (value === true) {
                            return (
                              <TableCell
                                style={{
                                  backgroundColor: row.color,
                                  color: "#40F331",
                                  fontSize: "18px",
                                  "font-weight": "bold",
                                }}
                                key={column.id}
                                align={column.align}
                              >
                                <CheckBoxIcon />
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell
                                style={{
                                  backgroundColor: row.color,
                                  color: "#FF0D0D",
                                  fontSize: "18px",
                                  "font-weight": "bold",
                                }}
                                key={column.id}
                                align={column.align}
                              >
                                {column.solved}
                                <CancelIcon />
                              </TableCell>
                            );
                          }
                        } else {
                          if (column.id === "Title") {
                            return (
                              <TableCell
                                style={{
                                  backgroundColor: row.color,
                                  color: "white",
                                  fontSize: "18px",
                                  "font-weight": "bold",
                                }}
                                key={column.id}
                                align={column.align}
                              >
                                {/* SE DEBE PASAR EL ENDPOINT PARA IR A LA VISTA DEL PROBLEMA ESPECIFICO */}
                                <a
                                  href="#"
                                  style={{
                                    color: "white",
                                  }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </a>
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell
                                style={{
                                  backgroundColor: row.color,
                                  color: "white",
                                  fontSize: "18px",
                                  "font-weight": "bold",
                                }}
                                key={column.id}
                                align={column.align}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          }
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          style={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "#7E84A7",
            fontWeight: "bold",
          }}
        />
      </Paper>
    </Grid>
  );
};

export default ProblemList;
