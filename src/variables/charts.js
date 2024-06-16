// Consultas por usuario Dashboards Default

export const barChartDataDailyCallsAPI = [
  {
    name: "Consultas",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyCallsAPI = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: [
      'jperez',
      'agomez',
      'mfernandez',
      'lgomez',
      'mgarcia',
      'crodriguez',
      'lmartinez',
      'jlopez'
  ],
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strOKeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

// Consumption Users Reports

export const barChartDataModelLaunchings = [
  {
    name: "OK",
    data: [5, 6, 6, 6, 8, 9, 11, 11, 10],
  },
  {
    name: "KO",
    data: [1, 0, 1, 2, 0, 1, 0, 0, 1],
  },
  {
    name: "Sin lanzar",
    data: [0, 1, 0, 1, 1, 0, 0, 1, 1],
  },
];

export const barChartOptionsModelLaunchings = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: true,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#23C65F", "#EE5D50", "#F9D957"],
  },
  legend: {
    show: true,
  },
  colors: ["#23C65F", "#EE5D50", "#F9D957"], // PARA MODO NOCHE
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "25px",
    },
  },
};

export const pieChartOptions = {
  labels: ["CRM", "HR", "Finance"],
  colors: ["#422AFB", "#00B5D8", "#D53F8C"],
  chart: {
    width: "100px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#422AFB", "#00B5D8", "#D53F8C"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartData = [25, 12, 21];

// Total Spent Default

export const lineChartDataSucessRate = [
  {
    name: "Tasa de éxito",
    data: [30, 55, 70, 55, 75, 175.6, 142.8],
  },
  {
    name: "Tasa natural",
    data: [15, 35, 55, 28, 20, 50, 30],
  },
];

export const lineChartOptionsSucessRate = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  colors: ["#4318FF", "#39B8FF"],
  markers: {
    size: 0,
    colors: "white",
    strOKeColors: "#7551FF",
    strOKeWidth: 3,
    strOKeOpacity: 0.9,
    strOKeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: false,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  strOKe: {
    curve: "smooth", // Aplicado globalmente, pero se puede sobrescribir en cada serie
  },
  xaxis: {
    type: "category", // Cambiado a "category" para las etiquetas de texto
    categories: ["AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: true, // Mostrar el borde del eje x
      color: "#A3AED0",
    },
    axisTicks: {
      show: false, // Mostrar las marcas de los ticks en el eje x
      color: "#A3AED0",
    },
  },
  yaxis: {
    show: true, // Mostrar el eje y
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: true, // Mostrar el borde del eje y
      color: "#A3AED0",
    },
    axisTicks: {
      show: false, // Mostrar las marcas de los ticks en el eje y
      color: "#A3AED0",
    },
  },
  legend: {
    show: true, // Mostrar leyenda para identificar las líneas
  },
  grid: {
    show: true,
    column: {
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  series: [
    {
      name: "Tása de éxito",
      data: [25, 50, 64, 48, 66, 49, 48],
      strOKe: {
        type: "solid",
      },
    },
    {
      name: "Tasa natural",
      data: [12, 30, 50, 24, 16, 50, 86],
      strOKe: {
        type: "dashed",
        dashArray: 5, // Configuración específica para la línea discontinua
      },
    },
  ],
};



