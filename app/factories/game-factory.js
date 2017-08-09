"use strict";

findIt.factory("GameFactory", function($q, $http, FirebaseUrl) {

	let getAllPlaces = () => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}places.json`)
			.then( (places) => {
				let allPlaces = places.data;
				resolve(allPlaces);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let getUsersPlaceIds = (currentUser) => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}user-places.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then( (userPlaces) => {
				resolve(userPlaces.data);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let getUsersPlaces = (placeId) => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}places.json?orderBy="id"&equalTo="${placeId}"`)
			.then( (usersPlaces) => {
				resolve(usersPlaces.data);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let storeUsersScore = (userScoreObj) => {
		return $q( (resolve, reject) => {
			$http.post(`${FirebaseUrl}user-scores.json`,
				angular.toJson(userScoreObj))
			.then( (response) => {
				console.log("post score to firebase", response);
				resolve(response);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let getUsersScores = (currentUser) => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}user-scores.json?orderBy="uid"&equalTo="${currentUser}"`)
			.then( (usersScores) => {
				resolve(usersScores.data);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let storeUsersPlace = (userPlaceObj) => {
		return $q( (resolve, reject) => {
			$http.post(`${FirebaseUrl}user-places.json`,
				angular.toJson(userPlaceObj))
			.then( (response) => {
				console.log("post place to firebase", response);
				resolve(response);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let getPlaceDetail = (placeId) => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}places.json?orderBy="id"&equalTo="${placeId}"`)
			.then( (place) => {
				resolve(place.data);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	let deletePlace = (placeId) => {
		return $q( (resolve, reject) => {
			if (placeId) {
				$http.delete(`${FirebaseUrl}places/${placeId}.json`)
				.then( (data) => {
					resolve(data);
				})
				.catch( (err) => {
					reject(err);
				});
			} else {
				console.log("Mistake deleting place");
			}
		});
	};

	return { getAllPlaces, getUsersPlaces, getUsersPlaceIds, storeUsersScore, getUsersScores, storeUsersPlace, getPlaceDetail, deletePlace };

});