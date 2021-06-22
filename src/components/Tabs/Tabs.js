import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import colors from "../../config/colors/colors";
import CodeEditor from "../CodeEditor/CodeEditor";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';

export default function Todito({
    type,
    id,
    title,
    difficulty,
    description,
    solution,
    data,
    ...props
}) {
    const classes = useStyles(props);

    const columns = [
        { field: "date", headerName: "Enviado", minWidth: 140, align: "left" },
        { field: "status", headerName: "Estado", minWidth: 120, align: "left" },
        { field: "language", headerName: "Lenguaje", minWidth: 120, align: "left" },
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const rows = data;

    const getTodito = () => {
        switch (type.toLowerCase()) {
            case "description":
                return (
                    <Box className={classes.containerTodito}>
                        <Box className={classes.containerTitle}>
                            <h1 className={classes.title}>
                                {id}. {title}
                            </h1>
                            <h2 className={classes.difficulty}>{difficulty}</h2>
                        </Box>
                        <Box className={classes.containerDescription}>
                            <p className={classes.description}>{description}</p>
                        </Box>
                    </Box>
                );
            case "solution":
                return (
                    <Box className={classes.containerTodito}>
                        <Box className={classes.containerTitle}>
                            <h1 className={classes.title}>Solución</h1>
                        </Box>
                        <Box className={classes.containerDescription}>
                            <h2 className={classes.subtitle}>
                                {id}. {title}
                            </h2>
                            <p className={classes.description}>{description}</p>
                            <Box className={classes.containerButton}>
                                <CopyToClipboard text={solution}>
                                    <Button className={classes.buttonTodito}>
                                        Copiar
                                    </Button>
                                </CopyToClipboard>
                            </Box>
                            <Box className={classes.codeEditor}>
                                <CodeEditor 
                                    readOnly={true}
                                    language="text/x-java"
                                    value={solution}
                                />
                            </Box>
                        </Box>
                    </Box>
                );
            case "submissions":
                if (data.length == 0) {
                    return (
                        <Box className={classes.containerTodito}>
                            <Box className={classes.containerTitle}>
                                <h1 className={classes.title}>Submissions</h1>
                            </Box>
                            <Box className={classes.containerDescription}>
                                <h2 className={classes.subtitle}>
                                    {id}. {title}
                                </h2>
                                <p className={classes.description}>
                                    No se ha realizado ningún intento.
                                </p>
                            </Box>
                        </Box>
                    );
                } else {
                    return (
                        <Box className={classes.containerTodito}>
                            <Box className={classes.containerTitle}>
                                <h1 className={classes.title}>Intentos</h1>
                            </Box>
                            <Paper className={classes.paper}>
                                <TableContainer className={classes.table}>
                                    <Table
                                        stickyHeader
                                        aria-label="sticky table"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.field}
                                                        align={column.align}
                                                        style={{
                                                            minWidth:
                                                                column.minWidth,
                                                        }}
                                                    >
                                                        {column.headerName}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows
                                                .slice(
                                                    page * rowsPerPage,
                                                    page * rowsPerPage +
                                                        rowsPerPage
                                                )
                                                .map((row) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            role="checkbox"
                                                            tabIndex={-1}
                                                            key={row['id']}
                                                        >
                                                            {columns.map(
                                                                (column) => {
                                                                    const value =
                                                                        row[
                                                                            column
                                                                                .field
                                                                        ];
                                                                    return (
                                                                        <TableCell
                                                                            key={column.field + row['id']}
                                                                            align={
                                                                                column.align
                                                                            }
                                                                        >
                                                                            {column.format &&
                                                                            typeof value ===
                                                                                "number"
                                                                                ? column.format(
                                                                                      value
                                                                                  )
                                                                                : value}
                                                                        </TableCell>
                                                                    );
                                                                }
                                                            )}
                                                        </TableRow>
                                                    );
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, 50]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={
                                        handleChangeRowsPerPage
                                    }
                                />
                            </Paper>
                        </Box>
                    );
                }
            default:
                break;
        }
    };

    return getTodito();
}

const useStyles = makeStyles((theme) => ({
    containerTodito: {
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "1%",
        "& .MuiTableCell-stickyHeader": {
            backgroundColor: "#1B1D2B",
            color: "white",
            textAlign: "center",
        },
        "& .MuiTableContainer-root": {
            backgroundColor: "#282A36",
        },
        "& .MuiTableCell-alignLeft": {
            textAlign: "center",
            color: "white",
            borderColor: "#40414B",
        },
        "& .MuiTablePagination-toolbar": {
            backgroundColor: "#1B1D2B",
            color: "white",
        },
        "& .MuiSelect-icon": {
            color: "white",
        },
        "& .MuiIconButton-root.Mui-disabled": {
            color: "white",
        },
    },
    containerTitle: {
        borderBottom: "2px solid #40414B",
    },
    title: {
        color: "white",
        fontFamily: "Roboto",
        fontStyle: "bold",
        fontWeight: "normal",
        fontSize: "150%",
        textAlign: "left",
        margin: 0,
        marginBottom: "2vh",
    },
    difficulty: {
        color: (props) => props.colorDifficulty,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "130%",
        textAlign: "left",
        margin: 0,
        paddingBottom: "2vh",
    },
    description: {
        color: "white",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "115%",
        textAlign: "left",
        lineHeight: "29px",
    },
    subtitle: {
        color: "white",
        fontFamily: "Roboto",
        fontStyle: "bold",
        fontWeight: "normal",
        fontSize: "130%",
        textAlign: "left",
    },
    buttonTodito: {
        background: "rgba(255, 255, 255, 0)",
        color: "white",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "115%",
        textAlign: "center",
        marginRight: "1%",
        marginBottom: "1%",
        textTransform: 'none',

        width: "10%",
        height: "10%",

        border: "1px solid rgba(255, 255, 255, 0.5)",
        boxSizing: "border-box",
        boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.28)",
        borderRadius: "5px",
        transition: "background 1.5s",
        transition: "color 1.5s",
        "&:hover": {
            transition: "background 1.5s",
            transition: "color 1.5s",
            background: "#FFFFFF",
            color: "#474747",
            cursor: "pointer",
        },
        [theme.breakpoints.down('sm')]: {
            width: "24%",
            height: "10%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "28%",
            height: "10%",
        },
        [theme.breakpoints.down('md')]: {
            width: "28%",
            height: "10%",
        },
    },
    containerButton: {
        display: "flex",
        flexDirection: "row-reverse",
    },
    paper: {
        width: "100%",
        marginTop: 10,
    },
    table: {
        maxHeight: 440,
    },
    codeEditor: {
    }
}));
