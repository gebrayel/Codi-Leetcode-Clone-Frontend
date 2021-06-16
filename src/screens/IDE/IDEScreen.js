import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Todito from "../../components/Tabs/Tabs";
import colors from "../../config/colors/colors";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import HighlightIcon from "@material-ui/icons/Highlight";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import CodeEditor from "../../components/CodeEditor/CodeEditor";

export default function Toditocreen({ x, ...props }) {
    const classes = useStyles(props);
    const [value, setValue] = React.useState(0);
    const [lenguaje, setLenguaje] = React.useState("");
    const [code, setCode] = React.useState("");

    const handleTabs = (e, val) => {
        setValue(val);
    };

    return (
        <Grid container className={classes.container}>
            <Box className={classes.box}>
                <AppBar position="static" className={classes.container2}>
                    <Tabs
                        value={value}
                        onChange={handleTabs}
                        aria-label=""
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Descripción" icon={<LineStyleIcon />} />
                        <Tab label="Solución" icon={<HighlightIcon />} />
                        <Tab label="Intentos" icon={<AccessTimeIcon />} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Todito
                        type="description"
                        id={51}
                        title="N-Reinas"
                        difficulty="Difícil"
                        colorDifficulty="#E75656"
                        description="El rompecabezas de las n-reinas es un problema de colocar n reinas en un tablero de ajedrez de tamaño nxn, de tal manera de que no existan dos reinas que se puedan atacar una a otra. Dado un entero n, retorne todas las posibles soluciones al problema de las n-reinas."
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Todito
                        type="solution"
                        id={51}
                        title="N-Reinas"
                        solution="print('hello')"
                        description="El rompecabezas de las n-reinas es un problema de colocar n reinas en un tablero de ajedrez de tamaño nxn, de tal manera de que no existan dos reinas que se puedan atacar una a otra. Dado un entero n, retorne todas las posibles soluciones al problema de las n-reinas."
                    />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Todito
                        type="submissions"
                        id={51}
                        data={[
                            {
                                time: "08/06/2021",
                                status: "Aprobado",
                                language: "Java",
                            },
                            {
                                time: "09/06/2021",
                                status: "Desaprobado",
                                language: "Python",
                            },
                        ]}
                    />
                </TabPanel>
            </Box>
            <Box className={classes.box}>
                <Box className={classes.box4}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-lenguaje-simple">
                            Lenguaje
                        </InputLabel>
                        <Select
                            native
                            value={lenguaje}
                            onChange={(e) => setLenguaje(e.target.value)}
                            label="Lenguaje"
                            inputProps={{
                                name: "Lenguaje",
                                id: "outlined-lenguaje-simple",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={"Java"}>Java</option>
                            <option value={"Python"}>Python</option>
                        </Select>
                    </FormControl>
                </Box>
                <Box className={classes.codeEditor}>
                    <CodeEditor
                        readOnly={false}
                        language="text/x-java"
                        value={code}
                        onChange={setCode}
                    />
                </Box>
            </Box>
        </Grid>
    );
}

function TabPanel(props) {
    const classes = useStyles(props);
    const { children, value, index } = props;
    if (value === index) {
        return <Box className={classes.box2}>{children}</Box>;
    } else {
        return <Box className={classes.box3}></Box>;
    }
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#282A36",
        width: "99.9vw",
        height: "91vh",
        marginTop: "54px",
        justifyContent: "center",
        display: "flex",
    },
    box: {
        backgroundColor: '#282A36',
        width: '50%',
        height: '91vh',
        [theme.breakpoints.down('sm')]: {
            width: "99.8%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "99.8%"
        },
    },
    container2: {
        backgroundColor: "#1B1D2B",
    },
    box2: {
        marginTop: "10px",
        height: "89%",
        width: "100%",
        overflowY: "auto",
        scrollBehavior: "smooth",
        "&::-webkit-scrollbar": {
            width: 8,
        },
        "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.2)",
            outline: "1px solid slategrey",
            borderRadius: 7,
        },
    },
    box3: {
        display: "none",
    },
    box4: {
        height: "72px",
        width: "calc(100% -10px)",
        backgroundColor: "#1B1D2B",
        boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.28)",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
    },
    formControl: {
        width: '110px',
        "& ..MuiFormControl-root": {
            width: "110px",
        },
        "& .MuiInputLabel-animated": {
            color: "white",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
                borderColor: "white",
                borderWidth: "1px",
            },
        "& .MuiSelect-icon": {
            color: "white",
        },
        "& .MuiSelect-outlined.MuiSelect-outlined": {
            color: "white",
        },
        "& .MuiSelect-select:not([multiple]) option, .MuiSelect-select:not([multiple]) optgroup":
            {
                color: "white",
                backgroundColor: "#282A36",
            },
    },
    langSelect: {
        "&.MuiSelect-select": {
            color: "white",
        },
    },
    codeEditor: {
        marginTop: "10px",
        textAlign: 'left'
    },
}));
