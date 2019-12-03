//a memory location that never changes
const BASE_URL = "https://zagster-service.herokuapp.com"
const PI = 3.14159

//constants are capitalized

//jQuery command. Wait until web page loads call function
//whose name is in parentheses
//function call means rune the code
$(greeter)

//call funtion add (use it - make it run)
add(2,3);
//greeter is the function identifier. name is the functions
//argument (info it needs to do its job)
function add(num1, num2){
  answer = num1 + num2;
  console.log("The answer is: " + answer);
  return answer;
}
function greeter(name){
  alert("Welcome to " +name + " data visualization")
}

greeter("Vernon's")


var data = {"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data[2016]
console.log('year list is' +year_list)

console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])

$(updateView)

let years = []
let months2016 = []
let months2017 = []
let months2018 = []

 $(updateGraph)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),
  ).then(updateChart);
}

function perYear(data) {
  for (var index = 0, month = 9; index <= 3, month<=12; ++index, ++month){
    months2016.push(data[2016] [index] [month])
  }
  console.log("2016 data by months is easy " + months2016)
  
  for (var index = 0, month = 9; index <= 3, month<=12; ++index, ++month){
    months2016.push(data[2017] [index] [month])
  }
  console.log("2017 data by months is easy " + months2016)
  
  for (var index = 0, month = 9; index <= 3, month<=12; ++index, ++month){
    months2016.push(data[2018] [index] [month])
  }
  console.log("2018 data by months is easy " + months2016)

}

function updateRideCount(data) {
   numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  alert(numberOfRides);
  console.log(numberOfRides)
}

 function updateGraph() {
   var ctx = document.getElementById('myChart').getContext('2d');
 var chart = new Chart(ctx, {
    // The type of chart we want to create
     type: 'line',

//     // The data for our dataset
     data: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [{
             label: 'Zagster Dataset',
             backgroundColor: '#da680f',
              borderColor: 'black',
             data: [0, 10, 5, 2, 20, 30, 45]
         }]
     },

//     // Configuration options go here
     options: {}
 });
 }
