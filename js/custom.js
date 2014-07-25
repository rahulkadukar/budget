  var start   = new Date(2014,06,03);
  var end     = new Date(2014,08,08);
  var total	  = 1542;
  var perDiem = total / ((end - start) / 1000 / 86400);
  var daily   = [];
  var diff    = [];
  var spend   = [];
  var counter;
  var date = new Date();
  var gExpense = 0;
  var gDays = 0;

  $(function(){
    $.something = function(expense,days){ 
	  $.get('data/foo.txt', function(data){
		var lastValue;
		data = JSON.parse(data);
		
		daily   = [];
		diff    = [];
		spend   = [];

		for(i in data){
			if(i == 20140703)
			  lastValue = data[i];
			else{
			  var yyyy = i.substring(0,4);
			  var mm   = i.substring(4,6) - 1;
			  var dd   = i.substring(6,8);
			  date = new Date(yyyy,mm,dd);
			
			  var tillNow = (date - start) / 86400000;
			
			  var theoretical = (total - (tillNow * perDiem)).toFixed(2);
			  var practical = data[i];
			  var difference = (practical - theoretical).toFixed(2);
			  var dailySpend = lastValue - data[i];
			  spend.push(parseFloat(dailySpend.toFixed(2)));
			  lastValue = data[i];

			  diff.push(parseFloat(difference));
			 
			  var timeLine = i.substring(6,8)+"-"+i.substring(4,6);
			  daily.push(timeLine);

			  counter = tillNow;
			}       
		}

		tillNow = counter; 
		date = date.setDate(date.getDate() + 1);
		
		for(x = 0; x < days; x++){
			tillNow++;

			theoretical = (total - (tillNow * perDiem)).toFixed(2);
			practical = practical - expense;
			difference = (practical - theoretical).toFixed(2);
			spend.push(parseFloat(expense.toFixed(2)));
			
			diff.push(parseFloat(difference));
			
			var something = new Date(date + x * 86400000);
			var month = something.getMonth() + 1;
			if(month < 10)
				month = "0"+month;

			var day = something.getDate();
			if(day < 10)
				day = "0"+day;

			var timeLine = day+"-"+month;
			daily.push(timeLine);
		}

		console.log(spend);

		var barChart = {
			"type"			: "column",
			"container" 	: "expense",
			"title"			: "Expenses",
			"xAxisCaption"	: "Days",
			"xAxisCategory"	: daily,
			"yAxisCaption"	: "Amount Spent",
			"unit"			: " ",
			"spend"			: spend,
			"budget"		: diff
		};
		$.barChart(barChart);
	  });
	}
  });

  $(document).ready(function() {
    $.something(0,0);
    return false;
  });


  $(function(){
    $("#sliderDaily").slider({
      min: 0,
      max: 60,
      step: 1,
      slide: function(event,ui){
		gExpense = ui.value
        $.something(gExpense,gDays);
      }
	});

	$("#sliderDays").slider({
      min: 0,
      max: 20,
      step: 1,
      slide: function(event,ui){
        gDays = ui.value
        $.something(gExpense,gDays);
      }
	});
  });