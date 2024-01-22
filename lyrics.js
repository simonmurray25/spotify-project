d3.select("#year1_dropDown").on("change",function(d){
    let year_choice1 = d3.select(this).property('value');
    //Link with selected category
    let link = 'http://127.0.0.1:5000/lyrics/'+ year_choice1;
    //Get data and store in console
    d3.json(link, function(error, data){
        console.log(data);

        //Creating word array from song lyrics from selected year
        let songArray = [];
        let wordArray = [];
        const count = {}
        for (let i = 0; i<data.length; i++) {
            songArray =(data[i].Lyrics).replace(/[.,?!$%@()]/g,' ').split(" ");
            for(let a=0; a<songArray.length; a++){
                if (songArray[a]!="") {
                    wordArray.push(songArray[a]);
                }
                
            }  
        }
        
        //Remove certain words
        let wordsRemove = ['Verse','Chorus','Contributors','Contributor','Translations','a','i','I','A','the', 'my', 'of','me','it', 'in', 'Of','your', 'You', 'on', 'On', 'In','?','My', 'If', 'It','Is', 'To','The','Too', 'Me','And','I\'m', 'Are',"(Taylor\'s)",'Version)'];
        let finalArray = wordArray.filter(elem => !wordsRemove.includes(elem));
        for (let n = 0; n < finalArray.length; n++) {
            let ele = finalArray[n];
            if (count[ele]) {
                count[ele] += 1;
            } else {
                count[ele] = 1;
            }
        }
        const keys = Object.keys(count);
        const values = Object.values(count);
        
        console.log(count)
        console.log(keys);
        console.log(values);

        let newCount = [];
        for (let x = 0; x < keys.length; x++) {
            newCount.push({word:keys[x], frequency:values[x]})
        }
        newCount = newCount.sort((a,b)=>b.frequency-a.frequency).slice(0,25)
        keys2 = newCount.map((obj)=>obj.word);
        values2 = newCount.map((obj)=>obj.frequency);
        console.log(newCount)
        console.log(keys2)
        console.log(values2)

        // create the chart in plotly
        let trace1 = {
            x: values2,
            y: keys2,
            text: keys2,
            // name: "Greek",
            type: "bar",
            orientation: "h"
          };
          
          // Data array
          let data2 = [trace1];
          
          // Apply a title to the layout
          let layout = {
            title: "Top Song of Chosen Year 1",
            yaxis: {
                dtick:1
            },
            margin: {
              l: 100,
              r: 100,
              t: 100,
              b: 100
            }
          };
          
          // Render the plot to the div tag with id "plot"
          Plotly.newPlot("lyric_dataviz1", data2, layout);
          

})})
d3.select("#year2_dropDown").on("change",function(d){
    let year_choice2 = d3.select(this).property('value');
    //Link with selected category
    let link = 'http://127.0.0.1:5000/lyrics/'+ year_choice2;
    //Get data and store in console
    d3.json(link, function(error, data){
        console.log(data);

        //Creating word array from song lyrics from selected year
        let songArray = [];
        let wordArray = [];
        const count = {}
        for (let i = 0; i<data.length; i++) {
            songArray =(data[i].Lyrics).replace(/[.,?!$%@()]/g,' ').split(" ");
            for(let a=0; a<songArray.length; a++){
                if (songArray[a]!="") {
                    wordArray.push(songArray[a]);
                }
                
            }  
        }
        
        //Remove certain words
        let wordsRemove = ['Verse','Chorus','Contributors','Contributor','Translations','a','i','I','A','the', 'my', 'of','me','it', 'in', 'Of','your', 'You', 'on', 'On', 'In','?','My', 'If', 'It','Is', 'To','The','Too', 'Me','And','I\'m', 'Are',"(Taylor\'s)",'Version)'];
        let finalArray = wordArray.filter(elem => !wordsRemove.includes(elem));
        for (let n = 0; n < finalArray.length; n++) {
            let ele = finalArray[n];
            if (count[ele]) {
                count[ele] += 1;
            } else {
                count[ele] = 1;
            }
        }
        const keys = Object.keys(count);
        const values = Object.values(count);
        
        console.log(count)
        console.log(keys);
        console.log(values);

        let newCount = [];
        for (let x = 0; x < keys.length; x++) {
            newCount.push({word:keys[x], frequency:values[x]})
        }
        newCount = newCount.sort((a,b)=>b.frequency-a.frequency).slice(0,25)
        keys2 = newCount.map((obj)=>obj.word);
        values2 = newCount.map((obj)=>obj.frequency);
        console.log(newCount)
        console.log(keys2)
        console.log(values2)

        // create the chart in plotly
        let trace1 = {
            x: values2,
            y: keys2,
            text: keys2,
            // name: "Greek",
            type: "bar",
            orientation: "h"
          };
          
          // Data array
          let data2 = [trace1];
          
          // Apply a title to the layout
          let layout = {
            title: "Top Song of Chosen Year 2",
            yaxis: {
                dtick:1
            },
            margin: {
              l: 100,
              r: 100,
              t: 100,
              b: 100
            }
          };
          
          // Render the plot to the div tag with id "plot"
          Plotly.newPlot("lyric_dataviz2", data2, layout);
        
})})