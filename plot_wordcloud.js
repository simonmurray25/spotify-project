//Dropdown
//Source: https://data-map-d3.readthedocs.io/en/latest/steps/step_12.html

d3.select("#d3-dropdown").on("change",function(d){
    let category = d3.select(this).property('value');
    
    //Link with selected category
    let link = 'http://127.0.0.1:5000/category/'+ category;
    //Get data and store in console
    d3.json(link, function(error, data){
        console.log(data);

        //Creating word array from song titles from selected category
        let songArray = [];
        let wordArray = [];
        for (let i = 0; i<data.length; i++) {
            songArray =(data[i].Title).split(" ");
            for(let a=0; a<songArray.length; a++){
                wordArray.push(songArray[a]);
            }  
        }
        //Remove certain words
        let wordsRemove = ['a','i','I','A','the', 'my', 'of','me','it', 'in', 'Of','your', 'You', 'on', 'On', 'In','?','My', 'If', 'It','Is', 'To','The','Too', 'Me','And','I\'m', 'Are',"(Taylor\'s)",'Version)'];
        let finalArray = wordArray.filter(elem => !wordsRemove.includes(elem));
    

        //Source: https://d3-graph-gallery.com/graph/wordcloud_custom.html
        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 450 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#my_dataviz").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


        // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
        // Wordcloud features that are different from one word to the other must be here
        var layout = d3.layout.cloud()
        .size([width, height])
        .words(finalArray.map(function(d) { return {text: d}; }))
        .padding(5)        //space between words
        .rotate(0)       // rotation angle in degrees
        .fontSize(20)      // font size of words
        .on("end", draw);
        layout.start();

        // This function takes the output of 'layout' above and draw the words
        // Wordcloud features that are THE SAME from one word to the other can be here
        function draw(words) {
        svg
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
            .data(words)
        .enter().append("text")
            .style("font-size", 20)
            .style("fill", "#1DB954")
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) {return d.text; });
        }

    });

}); 

