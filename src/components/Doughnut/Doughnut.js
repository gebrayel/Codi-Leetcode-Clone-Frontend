import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pie, Doughnut } from 'react-chartjs-2';

export default function DoughnutChart({ labels, data, colors, font_color, type, ...props }) {
    //type:true == Doughnut  ...  type:false == Pie
    const classes = useStyles(props);

    if(type){
        return (
            <Doughnut    className={classes.doughnut}
                    data={{
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                labels: {
                                    color: font_color
                                }
                            }
                        }
            }} />
        );
    }else{
        return (
            <Pie    className={classes.doughnut}
                    data={{
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                labels: {
                                    color: font_color
                                }
                            }
                        }
            }} />
        );
    }

}

const useStyles = makeStyles((theme) => ({


}));