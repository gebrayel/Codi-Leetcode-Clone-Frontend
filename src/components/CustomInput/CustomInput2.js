import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import user from "../../api/user/user";
import AppContext from "../../helpers/context/context";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import TextField from "@material-ui/core/TextField";
import RobotLoader from "../RobotLoader/RobotLoader";

import colors from "../../config/colors/colors";

export default function CustomInput() {
    const classes = useStyles();
    let locvalue = "Nombre";
    locvalue = "Nombre";
    let [text, setText] = useState({
        value: "Nombre",
        editMode: false,
        modif: "",
    });
    let [loader, setloader] = useState({ isActive: false });
    const userC = useContext(AppContext);
    const showLoader = () => {
        return <RobotLoader />;
    };
    const textEdition = () => {
        return (
            <div className={classes.textButtom}>
                <TextField
                    id="text"
                    className={classes.whiteTheme}
                    defaultValue={text.value}
                />

                <IconButton
                    className={classes.iconStyle}
                    style={{ padding: 5 }}
                    onClick={() => {
                        setText({
                            ...text,
                            editMode: !text.editMode,
                            modif: "",
                        });
                    }}
                >
                    <CancelOutlinedIcon
                        className={classes.iconSize}
                        style={{ fontSize: "2rem", color: "#E75656" }}
                    />
                </IconButton>
                <IconButton
                    style={{ padding: 5 }}
                    className={classes.iconStyle}
                    onClick={async () => {
                        try {
                            let textModified =
                                document.getElementById("text").value;
                            setloader({ isActive: true });
                            await user.putUser(
                                userC.user,
                                userC.setUser,
                                textModified
                            );
                            setText({
                                ...text,
                                modif: "",
                                value: textModified,
                                editMode: false,
                            });
                            locvalue.name = textModified;
                            localStorage.setItem(
                                "user",
                                JSON.stringify(locvalue)
                            );
                            setloader({ isActive: false });
                        } catch (error) {
                            setText({
                                ...text,
                                editMode: !text.editMode,
                                modif: "",
                            });
                        }
                    }}
                >
                    <DoneOutlineOutlinedIcon
                        style={{ fontSize: "2rem", color: "#84DB65" }}
                        className={classes.iconSize}
                    />
                </IconButton>
            </div>
        );
    };
    const textView = () => {
        return (
            <div className={classes.textButtom}>
                <div className={classes.textname}>{text.value}</div>
                <IconButton
                    className={classes.iconStyle}
                    onClick={() => {
                        setText({ ...text, editMode: !text.editMode });
                    }}
                >
                    <EditTwoToneIcon
                        style={{ fontSize: "2rem", color: "#869BFF" }}
                        className={classes.iconSize}
                    />
                </IconButton>
            </div>
        );
    };

    return (
        <>
            {loader.isActive
                ? showLoader()
                : text.editMode
                ? textEdition()
                : textView()}
        </>
    );
}
const useStyles = makeStyles((theme) => ({
    doughnut_container: {
        margin: 0,
        // marginTop: "10vh",
        height: 150,
        width: 200,
        "@media (max-width: 768px)": {
            maxHeight: 300,
            width: 350,
        },
        "@media (max-width: 550px)": {
            maxHeight: 100,
            width: 100,
        },
        "@media (max-width: 425px)": {
            maxHeight: 90,
            width: 70,
        },
    },
    miniTitle: {
        color: "white",
        textAlign: "center",
        marginRight: "2rem",
        marginTop: "1rem",
        paddingLeft: "1rem",
        "@media (max-width: 550px)": {
            fontSize: "0.7rem",
            marginRight: "1rem",
        },
        "@media (max-width: 425px)": {
            fontSize: "0.6rem",
            marginRight: "0.5rem",
        },
    },
    totalTitle: {
        color: "white",
        textAlign: "center",
        paddingTop: "1rem",
    },
    miniFlex: {
        display: "flex",
        justifyContent: "space-between",
    },
    leftBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    doughnut_container2: {
        margin: 0,
        // marginTop: "10vh",
        maxHeight: 400,
        width: 500,
        "@media (max-width: 768px)": {
            maxHeight: 400,
            width: 500,
        },
        "@media (max-width: 550px)": {
            maxHeight: 400,
            width: 500,
        },
        "@media (max-width: 425px)": {
            maxHeight: 400,
            width: 500,
        },
    },
    doughnut_container_mini: {
        margin: 0,
        // marginTop: "10vh",
        maxHeight: 100,
        width: 80,
        "@media (max-width: 768px)": {
            maxHeight: 80,
            width: 60,
        },
        "@media (max-width: 550px)": {
            maxHeight: 60,
            width: 40,
        },
        "@media (max-width: 425px)": {
            maxHeight: 60,
            width: 40,
        },
    },
    header: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    secondRow: {
        "@media (max-width: 768px)": {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
        },
    },
    divider: {},
    flexSpace: {
        padding: 10,
        backgroundColor: "#595959",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        maxHeight: 250,
        maxWidth: 700,
        borderRadius: 15,
        borderColor: "#B6B6B6",
        borderWidth: 10,
        marginBottom: 20,
        "@media (max-width: 550px)": {
            maxHeight: 150,
            maxWidth: 400,
        },
        "@media (max-width: 425px)": {
            maxWidth: 250,
        },
    },
    flexSpace2: {
        padding: 10,
        backgroundColor: "#595959",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        maxHeight: 250,
        maxWidth: 700,
        borderRadius: 15,
        borderColor: "#B6B6B6",
        borderWidth: 10,
        marginBottom: 20,
        marginLeft: "5rem",
        marginTop: "1rem",
        "@media (max-width: 768px)": {
            margin: 5,
            maxHeight: 150,
            maxWidth: 500,
        },
        "@media (max-width: 550px)": {
            margin: 5,
            maxHeight: 150,
            maxWidth: 400,
        },
        "@media (max-width: 425px)": {
            maxWidth: 300,
            padding: "10px",
            margin: 5,
        },
    },
    charttext: {
        fontSize: "1.5rem",
        color: colors.white,
        // marginRight: "4rem",
        paddingLeft: "2rem",
        textAlign: "center",
        "@media (max-width: 425px)": {
            fontSize: "0.75rem",
            marginRight: "2rem",
        },
    },
    image: {
        width: "13rem",
        height: "13rem",
        borderRadius: "50%",
        "@media (max-width: 425px)": {
            width: "9rem",
            height: "9rem",
        },
    },
    textname: {
        fontSize: "2rem",
        color: "white",
        fontWeight: "20px",
        "@media (max-width: 425px)": {
            fontSize: "1.5rem",
        },
    },
    textButtom: {
        display: "flex",
        justifyContent: "spaceBetween",
        alignItems: "center",
    },
    box: {
        margin: 0,
        maxWidth: "30rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    iconStyle: {
        "& .MuiButtonBase-root .MuiIconButton-root": {
            padding: 0,
        },
    },
    iconSize: {
        "& .MuiButtonBase-root .MuiIconButton-root": {
            padding: 0,
        },
        "@media (max-width: 952px)": {
            fontSize: "1.5rem",
        },
    },
    whiteTheme: {
        "& .MuiInputBase-root ": {
            color: colors.white,
            maxWidth: 280,
            width: 280,
            fontSize: "2rem",
            color: "white",
            fontWeight: "20px",
            "@media (max-width: 952px)": {
                fontSize: "1.5rem",
                maxWidth: 180,
                width: 180,
            },
            "@media (max-width: 425px)": {
                fontSize: "1rem",
                maxWidth: 120,
                width: 120,
            },
        },
        "& .MuiInputBase-input .MuiInput-input": {
            color: colors.white,
        },

        "& .MuiInput-underline:before": {
            borderColor: colors.white,
            borderWidth: "0.2rem",
            borderBottom: "0.2rem solid white",
        },
        "& .MuiInput-underline:after": {
            borderColor: colors.white,
            borderWidth: "0.2rem",
            borderBottom: "0.2rem solid white",
        },
        "& .MuiFormControl-root .MuiTextField-root .makeStyles-whiteTheme-51": {
            // width: 280,
        },
    },
}));
