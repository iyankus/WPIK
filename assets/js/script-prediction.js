// Load the data from the JSON file
var jsonData = "/assets/js/ratioAnalysis.json";
fetch(jsonData)
    .then(response => response.json())
    .then(data => {
        const yearSelect = document.querySelector('#year-select');
        const chartCanvas8 = document.querySelector('#chart8');
        const chartCanvas9 = document.querySelector('#chart9');
        const chartCanvas10 = document.querySelector('#chart10');

        let chart8;
        let chart9;
        let chart10;

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

            if (chart8) {
                chart8.destroy();
            }
            if (chart9) {
                chart9.destroy();
            }
            if (chart10) {
                chart10.destroy();
            }

            // Extract the company names and ratios from the selected year data
            const companies = selectedYearData.company;
            const zmijewski = selectedYearData.prediction.zmijewski;
            const springate = selectedYearData.prediction.springate;
            const grover = selectedYearData.prediction.grover;

            // Create the chartZmijewski
            chart8 = new Chart(chartCanvas8, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'Zmijewski',
                            data: zmijewski,
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
                                text: 'Predictive Value',
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
            // Create the chartSpringate
            chart9 = new Chart(chartCanvas9, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'Springate',
                            data: springate,
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
                                text: 'Predictive Value',
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
            // Create the chartGrover
            chart10 = new Chart(chartCanvas10, {
                type: 'bar',
                data: {
                    labels: companies,
                    datasets: [
                        {
                            label: 'Grover',
                            data: grover,
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
                                text: 'Predictive Value',
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