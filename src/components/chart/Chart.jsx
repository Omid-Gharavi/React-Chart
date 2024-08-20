'use client'

import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chartjs.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    // Legend
});

const Chart = () => {
    const options = {
        scales: {
            y: {
                grid: {
                    color: '#66023c',
                },
                min: 1000000,
                max: 800000000000,
                ticks: {
                    stepSize: 10000000000,
                    callback: (value) => {
                        if (value >= 1000000000) {
                            return `${Math.floor(value / 1000000000)}bn`;
                        } else if (value >= 1000000) {
                            return `${Math.floor(value / 1000000)}m`;
                        }
                        return value;
                    },
                },
            },
            x: {
                grid: {
                    color: '#66023c'
                }
            }
        },
        responsive: true,
        hoverRadius: 6,
        hoverBackgroundColor: 'orange',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x',
        },
        plugins: {
            // legend: {
            //     position: 'bottom'
            // },
            tooltip: {
                enabled: true,
                filler: {
                    propagate: false,
                    drawTime: 'beforeDatasetsDraw',
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true,
                        },
                        mode: 'xy',
                    },
                },
            },
        }
    };

    const data = {
        labels: ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',],
        datasets: [
            {
                id: 1,
                label: '',
                data: [11658722591, 12400145222, 13264015675, 14260017387, 15960106681, 17371457608, 18651883472, 19992040788, 21376353113, 23710735895, 26706196127, 29821661541, 37209417835, 56033078190, 65678188659, 71113883177, 82839905346, 1.01247E+11, 1.16315E+11, 1.26829E+11, 1.0473E+11, 92095926629, 87184238659, 83349529880, 86268264488, 1.20019E+11, 1.49394E+11, 1.62299E+11, 1.64221E+11, 2.05332E+11, 2.10511E+11, 2.34782E+11, 2.24722E+11, 2.44884E+11, 2.88026E+11, 2.79201E+11, 2.52708E+11, 2.58528E+11, 2.58159E+11, 2.36205E+11, 2.36541E+11, 2.57158E+11, 3.17382E+11, 3.68537E+11, 3.85571E+11, 4.07918E+11, 4.70324E+11, 5.15224E+11, 4.81346E+11, 4.80952E+11, 5.22646E+11, 4.96181E+11, 5.21643E+11, 5.34678E+11, 4.6215E+11, 4.75901E+11, 5.03789E+11, 5.42686E+11, 5.29607E+11],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                tension: 0.3,
                hidden: true,
            },
            {
                id: 2,
                label: '',
                data: [226195579.4, 235668222.4, 236434906.8, 253927646.5, 269818988.3, 289908720.6, 302925280.8, 306222000.4, 326323097.4, 330748211.5, 333627758.2, 335072975.2, 410331901, 504376035.7, 554654787, 676870140.3, 698408244.4, 750049739.2, 928843304.8, 1186231265, 1405251547, 1291119965, 1267778489, 1095348303, 1051133927, 1045712703, 1336102041, 1562412030, 1620246187, 1502294411, 1959965244, 1986437860, 1695315306, 2274557914, 1598075932, 2169627251, 2361116588, 2268301538, 2455092582, 3676045653, 3511248900, 3663017700, 4174634520, 5337266688, 6179176459, 6565043460, 7027863025, 8158257572, 9748276762, 9699586794, 9535344283, 10693321954, 11141358945, 12517845732, 13284528654, 11388160958, 11821066153, 12701656931, 14250985959, 14390709095,
                ],
                fill: true,
                borderColor: '',
                backgroundColor: 'rgba(255, 0, 0, 0.54)',
                tension: 0.3,
                hidden: true
            },
        ]
    }

    return (
        <div className='m-4 px-4 border-[1px] border-solid border-orchid-100 rounded-lg bg-orchid-900'>
            <Line data={data} options={options} />
        </div>
    )
}

export default Chart