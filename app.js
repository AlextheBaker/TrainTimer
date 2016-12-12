var config = {																					//firebase config
    apiKey: "AIzaSyAPrGyLEXo-z6w83RJZivuso2LHR_S2wcI",
    authDomain: "traintimer-57f04.firebaseapp.com",
    databaseURL: "https://traintimer-57f04.firebaseio.com",
    storageBucket: "traintimer-57f04.appspot.com",
    messagingSenderId: "665421833074"
  };

firebase.initializeApp(config);

var trainFirebase = firebase.database();														//data storage for use in app


$("#trainAdd").on("click", function(){															//function for adding a train to the page

	var trainNameData = $("#trainName").val().trim();
	var trainDestinationData = $("#trainDestination").val().trim();
	var trainTimeData = $("#trainTime").val().trim();
	var trainFrequencyData = $("#trainFrequency").val().trim();

	var trainNew = {																			//front end inputs are recieved and stored in trainNew
		trainNameData: trainNameData,
		trainDestinationData: trainDestinationData,
		trainTimeData: trainTimeData,
		trainFrequencyData: trainFrequencyData,
	}

	trainFirebase.ref().push(trainNew);															//trainNew is stored in firebase

});

trainFirebase.ref().on("trainAdd", function(trainDataPush){										//function for displaying calculations made with the data

	var trainNameData = trainDataPush.val().trainNameData;
	var trainDestinationData = trainDataPush.val().trainDestinationData;
	var trainTimeData = trainDataPush.val().trainTimeData;
	var trainFrequencyData = trainDataPush.val().trainFrequencyData;

	var //12-11-16 11:28pm     Need to finish moment.js usage and display data to frontend

});