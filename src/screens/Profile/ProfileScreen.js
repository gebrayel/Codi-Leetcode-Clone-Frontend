import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CodeEditor from "../../components/CodeEditor/CodeEditor";

export default function ProfileScreen({ x, ...props }) {
    const classes = useStyles(props);
    const [js, setJs] = useState("");

    return (    
        <div className={classes.container}>
            <CodeEditor 
                onChange={setJs}
                value={js}
                language='text/x-java'
            />
        </div>

    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 100
    },

}));