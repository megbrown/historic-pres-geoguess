"use strict";

findIt.factory("GameStorageFactory", function() {

	let gameObj = {};

	let storeGameObj = (gameObjStuff) => {
		gameObj.name = gameObjStuff.name;
		gameObj.origLat = gameObjStuff.lat;
		gameObj.origLng = gameObjStuff.long;
		gameObj.id = gameObjStuff.id;
	};

	let storeUsersGuess = (usersGuess) => {
		gameObj.guessLat = usersGuess.guessLat;
		gameObj.guessLng = usersGuess.guessLng;
	};

	let storeScore = (score, message) => {
		gameObj.score = score;
		gameObj.message = message;
	};

	let getStoredGameObj = () => {
		return gameObj;
	};

	return { storeGameObj, storeUsersGuess, storeScore, getStoredGameObj };

});