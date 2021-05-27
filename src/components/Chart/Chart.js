import React from "react";
import { Pie, Doughnut } from 'react-chartjs-2';

export default function Chart({ labels, data, colors, font_color, type, ...props }) {

    const dataObject = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: font_color
                }
            }
        }
    };

    const getChart = () => {
        switch (type.toLowerCase()) {
            case "doughnut":
                return (
                    <Doughnut 
                        data={dataObject}
                        options={options}
                    />
                )
            case "pie":
                return (
                    <Pie    
                        data={dataObject}
                        options={options}
                    />
                )
            default:
                break;
        }
    }

    return (
        getChart() 
    )

}