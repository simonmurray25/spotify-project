function avg(array) {
  //array[0];
  console.log(array)
  let sum = 0.0
  for (let i = 0; i < array.length; i++){
    sum += array[i]
    console.log(sum)
  }
  console.log(sum)
  //console.log(array[i])
  return sum / array.length;
}


d3.select("#year1_dropDown").on("change",function(d){

  updatePlotly();
})


d3.select("#year2_dropDown").on("change",function(d){
  updatePlotly();
})

    





// Initializes the page with a default plot



// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#year1_dropDown");
  console.log(dropdownMenu);
  // Assign the value of the dropdown menu option to a variable
  let year1 = dropdownMenu.property("value");

  let dropdownMenu2 = d3.select("#year2_dropDown");
  let year2 = dropdownMenu2.property("value");

  let url1 = 'http://127.0.0.1:5000/features/' + year1;
  let url2 = 'http://127.0.0.1:5000/features/' + year2;

  console.log("Hello");

  d3.json(url1, function(error1, data1){
    console.log(data1);
    let danceability1 = avg(data1.map((song) => parseFloat(song.Danceability)));
    let energy1 = avg(data1.map((song) => parseFloat(song.Energy)));
    let popularity1 = avg(data1.map((song) => parseFloat(song.Popularity)));
    //let duration1 = avg(data1.map((song) => parseFloat(song.Duration)));
    let tempo1 = avg(data1.map((song) => parseFloat(song.Tempo)));
    console.log(danceability1);
  d3.json(url2, function(error2, data2){
    let danceability2 = avg(data2.map((song) => parseFloat(song.Danceability)));
    let energy2 = avg(data2.map((song) => parseFloat(song.Energy)));
    let popularity2 = avg(data2.map((song) => parseFloat(song.Popularity)));
    //let duration2 = avg(data2.map((song) => parseFloat(song.Duration)));
    let tempo2 = avg(data2.map((song) => parseFloat(song.Tempo)));
    console.log(data2);

  

  var trace1 = {
    x: ['Dancability', 'Energy', 'Popularity', 'Tempo'],
    y: [danceability1, energy1, popularity1, tempo1],
    name: 'Year 1',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['Dancability', 'Energy', 'Popularity', 'Tempo'],
    y: [danceability2, energy2, popularity2, tempo2],
    name: 'Year 2',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'group'};
  Plotly.newPlot("audio_features", data, layout);
}
)
  }
  )
}

  
// updatePlotly();

// Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);
