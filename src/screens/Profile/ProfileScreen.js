import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../../components/Chart/Chart"

export default function ProfileScreen({ x, ...props }) {
    const classes = useStyles(props);

    return (
        <div className={classes.doughnut_container}>
            <Chart   
                labels={['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre']} 
                data={[10, 50, 20, 30, 50, 10, 45, 37, 7]} 
                colors={['#FF6384']}
                font_color="white"
                type="bar"
                label="Actividad"
            />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    doughnut_container: {
        marginTop:"10vh",
        height:400,
        width:400
    },

}));