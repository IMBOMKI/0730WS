function processData(nationsData){
//alert("Data Loaded");
	//var first_country = nationsData[0];
//alert(first_country.region);
//console.log(first_country.name);
	var mySvg = d3.select("svg");
	//var myCircle = mySvg.append("circle");
	//myCircle.attr("cx",200); 
	//myCircle.attr("cy",200); 
	//myCircle.attr("r",100);
    
	mySvg.attr("width", "800px"); 
	mySvg.attr("height", "800px");
	
	var xScale = d3.scale
		.log()
	    .domain([300,1e5])
		.range([0,800]);
	
	var yScale = d3.scale
		.linear()
	    .domain([10,85])
		.range([600, 0]);
		
	var sizeScale = d3.scale	
		.sqrt()
		.domain([1, 1e8])
		.range([0,30]);

	var allCircles = mySvg.selectAll(".circ")
		.data(nationsData, function(d) {return d.name;});
	allCircles.enter()
		.append("circle")
		.attr("cx", function(d) {return xScale(d.income[0]);})
		.attr("cy", function(d) {return yScale(d.lifeExpectancy[0]);})
		.attr("r",function(d) {return sizeScale(d.population[0]);})
		.attr("class", "circ");
}



d3.json("nations.json", processData);





/*  no need to use it anymore

alert("Hello!");
var list_of_num = [1,2,10];
alert(list_of_num);
console.log(list_of_num[0]);

var an_object = [[1,2], [5,6], {"a": 121, "b": "hello"}];
console.log(an_object);		

*/