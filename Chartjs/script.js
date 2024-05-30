document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById('myDoughnutChart').getContext('2d');
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
              title: {
                  display: true,
                  text: 'Doughnut Chart Example'
              }
          }
      }
  });
});
