import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import colors from "../../config/colors/colors";
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export default function Todito({ type, id, title, difficulty, description, solution, data, ...props }) {

    const classes = useStyles(props);

    const columns = [
        { id: 'time', label: 'Enviado', minWidth: 140,  align: 'left',},
        { id: 'status', label: 'Estado', minWidth: 120,  align: 'left',},
        { id: 'language', label: 'Lenguaje', minWidth: 120,  align: 'left',}
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
                            <h1 className={classes.title}>{id}. {title}</h1>
                            <h2 className={classes.difficulty}>{difficulty}</h2>
                        </Box>
                        <Box className={classes.containerDescription}>
                            <p className={classes.description}>{description}</p>
                        </Box>
                    </Box>
                )
            case "solution":
                return (
                    <Box className={classes.containerTodito}>
                        <Box className={classes.containerTitle}>
                            <h1 className={classes.title}>Solution</h1>
                        </Box>
                        <Box className={classes.containerDescription}>
                            <h2 className={classes.subtitle}>{id}. {title}</h2>
                            <p className={classes.description}>{description}</p>
                            <Box className={classes.containerButton}>
                                <CopyToClipboard text={solution}>
                                    <button className={classes.buttonTodito}>
                                        Copy
                                    </button>
                                </CopyToClipboard>
                            </Box>
                            <CodeEditor readOnly={true} language="text/x-java" value={solution}/>
                        </Box>
                    </Box>
                )
            case "submissions":
                return (
                    <Box className={classes.containerTodito}>
                        <Paper className={classes.paper}>
                            <TableContainer className={classes.table}>
                                <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                            );
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
                            />
                        </Paper>
                    </Box>
                )
            default:
                break;
        }
    }

    return (
        getTodito() 
    )

}

const useStyles = makeStyles((theme) => ({
    containerTodito: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '1%',
    },
    containerTitle: {
        borderBottom: '2px solid #40414B',
    },
    title: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'bold',
        fontWeight: 'normal',
        fontSize: '150%',
        textAlign: 'left',
        margin: 0,
        marginBottom: '2vh',
    },
    difficulty: {
        color: (props) => props.colorDifficulty,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '130%',
        textAlign: 'left',
        margin: 0,
        paddingBottom: '2vh',
    },
    description: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '115%',
        textAlign: 'left',
        lineHeight: '29px',
    },
    subtitle: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'bold',
        fontWeight: 'normal',
        fontSize: '130%',
        textAlign: 'left',
    },
    buttonTodito: {
        background: 'rgba(255, 255, 255, 0)',
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: "115%",
        textAlign: 'center',
        marginRight: '1%',
        marginBottom: '1%',
        
        width: "10%",
        height: "10%",

        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxSizing: 'border-box',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.28)',
        borderRadius: '5px',
        transition: 'background 1.5s',
        transition: 'color 1.5s',
        "&:hover": {
            transition: 'background 1.5s',
            transition: 'color 1.5s',
            background: '#FFFFFF',
            color: '#474747',
            cursor: "pointer",
        }
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    paper: {
        width: '100%',
    },
    table: {
        maxHeight: 440,
    },


}));