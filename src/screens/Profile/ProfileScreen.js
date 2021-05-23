import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Doughnut from "../../components/Doughnut/Doughnut"

export default function ProfileScreen({ x, ...props }) {
    const classes = useStyles(props);

    return (
        <div className={classes.doughnut_container}>
            <Doughnut   labels={['Faltante','Facil', 'Medio', 'Dificil']} 
                        data={[20,30,25,25]} 
                        colors={['#FFCD56', '#FF9F40', '#36A2EB', '#FF6384']}
                        font_color="white"
                        type={true}
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