// Load the data from the JSON file
var jsonData = "/assets/js/ratioAnalysis.json";
fetch(jsonData)
    .then(response => response.json())
    .then(data => {
        const yearSelect = document.querySelector('#year-select');
        const chartCanvas1 = document.querySelector('#chart1');
        const chartCanvas2 = document.querySelector('#chart2');
        const chartCanvas3 = document.querySelector('#chart3');
        const chartCanvas4 = document.querySelector('#chart4');
        const chartCanvas5 = document.querySelector('#chart5');
        const chartCanvas6 = document.querySelector('#chart6');
        const chartCanvas7 = document.querySelector('#chart7');

        let chart1;
        let chart2;
        let chart3;
        let chart4;
        let chart5;
        let chart6;
        let chart7;

        let delayed = false;

        // Populate the year select options
        data.ratio_analysis.forEach(ratio => {
            const option = document.createElement('option');
            option.value = ratio.year;
            option.textContent = ratio.year;
            yearSelect.appendChild(option);
        });

        // Function to update the chart based on the selected year
        function updateChart(year) {
            // Find the data for the selected year
            const selectedYearData = data.ratio_analysis.find(ratio => ratio.year === year);

            // Hancurkan grafik yang ada sebelum membuat yang baru
            if (chart1) {
                chart1.destroy();
            }
            if (chart2) {
                chart2.destroy();
            }
            if (chart3) {
                chart3.destroy();
            }
            if (chart4) {
                chart4.destroy();
            }
            if (chart5) {
                chart5.destroy();
            }
            if (chart6) {
                chart6.destroy();
            }
            if (chart7) {
                chart7.destroy();
            }

            // Extract the company names and ratios from the selected year data
            const companies = selectedYearData.company;
            const roa = selectedYearData.ratio.roa;
            const dtar = selectedYearData.ratio.dtar;
            const cr = selectedYearData.ratio.cr;
            const wcta = selectedYearData.ratio.wcta;
            const bepr = selectedYearData.ratio.bepr;
            const ebtclb = selectedYearData.ratio.ebtclb;
            const star = selectedYearData.ratio.star;

            // Create the chartRoa
            chart1 = new Chart(chartCanvas1, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'ROA',
                            data: roa,
                            backgroundColor: 'hsl(230, 95%, 85%)',
                            borderColor: 'hsl(230, 69%, 61%)',
                            borderWidth: 1,
                            borderRadius: 3,
                            borderSkipped: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Company',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Ratio',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 0.1,
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'hsl(230, 69%, 61%)'
                            }
                        }
                    }
                }
            });
            // Create the chartDtar
            chart2 = new Chart(chartCanvas2, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'DTAR',
                            data: dtar,
                            backgroundColor: 'hsl(230, 95%, 85%)',
                            borderColor: 'hsl(230, 69%, 61%)',
                            borderWidth: 1,
                            borderRadius: 3,
                            borderSkipped: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Company',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Ratio',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 0.1,
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'hsl(230, 69%, 61%)'
                            }
                        }
                    }
                }
            });
            // Create the chartCr
            chart3 = new Chart(chartCanvas3, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'CR',
                            data: cr,
                            backgroundColor: 'hsl(230, 95%, 85%)',
                            borderColor: 'hsl(230, 69%, 61%)',
                            borderWidth: 1,
                            borderRadius: 3,
                            borderSkipped: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Company',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Ratio',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 0.1,
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'hsl(230, 69%, 61%)'
                            }
                        }
                    }
                }
            });
            // Create the chartWcta
            chart4 = new Chart(chartCanvas4, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'WCTA',
                            data: wcta,
                            backgroundColor: 'hsl(230, 95%, 85%)',
                            borderColor: 'hsl(230, 69%, 61%)',
                            borderWidth: 1,
                            borderRadius: 3,
                            borderSkipped: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Company',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Ratio',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 0.1,
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'hsl(230, 69%, 61%)'
                            }
                        }
                    }
                }
            });
            // Create the chartBepr
            chart5 = new Chart(chartCanvas5, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'BEPR',
                            data: bepr,
                            backgroundColor: 'hsl(230, 95%, 85%)',
                            borderColor: 'hsl(230, 69%, 61%)',
                            borderWidth: 1,
                            borderRadius: 3,
                            borderSkipped: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Company',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Ratio',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 0.1,
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'hsl(230, 69%, 61%)'
                            }
                        }
                    }
                }
            });
            // Create the chartEbtclb
            chart6 = new Chart(chartCanvas6, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'EBTCLB',
                            data: ebtclb,
                            backgroundColor: 'hsl(230, 95%, 85%)',
                            borderColor: 'hsl(230, 69%, 61%)',
                            borderWidth: 1,
                            borderRadius: 3,
                            borderSkipped: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Company',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Ratio',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 0.1,
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'hsl(230, 69%, 61%)'
                            }
                        }
                    }
                }
            });
            // Create the chartEbtclb
            chart7 = new Chart(chartCanvas7, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'STAR',
                            data: star,
                            backgroundColor: 'hsl(230, 95%, 85%)',
                            borderColor: 'hsl(230, 69%, 61%)',
                            borderWidth: 1,
                            borderRadius: 3,
                            borderSkipped: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Company',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Ratio',
                                color: 'hsl(230, 69%, 61%)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 0.1,
                            grid: {
                                color: 'hsl(230, 57%, 53%, 0.3)'
                            },
                            ticks: {
                                color: 'hsl(230, 69%, 61%)',
                                font: {
                                    family: 'Poppins'
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                color: 'hsl(230, 69%, 61%)'
                            }
                        }
                    }
                }
            });
        }

        // Event listener for the year select
        yearSelect.addEventListener('change', event => {
            const selectedYear = event.target.value;
            updateChart(selectedYear);
        });

        // Initial chart update
        updateChart(yearSelect.value);
    });