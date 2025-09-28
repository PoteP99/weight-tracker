const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "1/1/2025",
      "2/1/2025",
      "3/1/2025",
      "4/1/2025",
      "5/1/2025",
      "6/1/2025",
      "7/1/2025",
    ],
    datasets: [
      {
        label: "Weight Over Time",
        data: [66, 67, 66.5, 67.1, 66.9, 67.3, 67.2],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weight Tracker",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Weight (kg)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  },
});
