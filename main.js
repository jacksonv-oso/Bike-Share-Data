const BASE_URL = "https://zagster-service.herokuapp.com"

$(greeter)

add(2,3);

function add(num1, num2){
  answer = num1 + num2;
  console.log("The answer is: " + answer);
  return answer;
}
function greeter(name){
  alert("Welcome to " +name + " data visualization")
}

greeter("Vernon's")


var data = []

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

  $.when ($.getJSON(BASE_URL + "/rides/count/per_hour", perHour),
  ).then(updateChart);
}

function perHour(data2016) {
  var data2016 = data[2016]
  console.log(data2016[0][429])
  my_data.push(data2016[0][429])
  console.log(data2016[1][231])
  my_data.push(data2016[1][231])
  console.log(data2016[2][130])
  my_data.push(data2016[2][130])
  console.log(data2016[3][85])
  my_data.push(data2016[3][85])
  console.log(data2016[4][42])
  my_data.push(data2016[4][42])
  console.log(data2016[5][1])
  my_data.push(data2016[5][1])
  console.log(data2016[7][1])
  my_data.push(data2016[7][1])
  console.log(data2016[8][17])
  my_data.push(data2016[8][17])
  console.log(data2016[9][16])
  my_data.push(data2016[9][16])
  console.log(data2016[10][795])
  my_data.push(data2016[10][795])
  console.log(data2016[11][425])
  my_data.push(data2016[11][425])
  console.log(data2016[12][921])
  my_data.push(data2016[12][921])
  console.log(data2016[13][846])
  my_data.push(data2016[13][846])
  console.log(data2016[14][1795])
  my_data.push(data2016[14][1795])
  console.log(data2016[15][1789])
  my_data.push(data2016[15][1789])
  console.log(data2016[16][2119])
  my_data.push(data2016[16][2119])
  console.log(data2016[17][1630])
  my_data.push(data2016[17][1630])
  console.log(data2016[18][1942])
  my_data.push(data2016[18][1942])
  console.log(data2016[19][1637])
  my_data.push(data2016[19][1637])
  console.log(data2016[20][1636])
  my_data.push(data2016[20][1636])
  console.log(data2016[21][1054])
  my_data.push(data2016[21][1054])
  console.log(data2016[22][843])
  my_data.push(data2016[22][843])
  console.log(data2016[23][710])
  my_data.push(data2016[23][710])

}
function updateRideCount(data) {
   numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  alert(numberOfRides);
  console.log(numberOfRides)
}

 function updateChart() {
   var ctx = document.getElementById('myChart').getContext('2d');
 var chart = new Chart(ctx, {
     type: 'line',

     data: {
         labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23'],
         datasets: [{
             label: 'Number of Rides Per Hour',
             backgroundColor: '#da680f',
              borderColor: 'black',
             data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         }]
     },

     options: {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }

     }
 });
 }
