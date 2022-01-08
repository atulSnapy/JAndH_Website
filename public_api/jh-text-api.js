'use strict';


class JHTexAPI {
    constructor() {
        this.apiName = "J and H Textiles Web API";
        this.apiCollection = firebase.firestore().collection('API_TEST');
    }

    // getRestaurant(id) {
    //     apiCollection.doc('tEox5ddddWGG5G8PUkVN').get()
    //         .then(function (doc) {
    //             var data = doc.data();
    //             console.log(data);
    //             return data;
    //         }).catch(function (err) {
    //             console.log(err);
    //         });
    // }

    sendRequest(request, responseHandler, errorHandler) {
        var that = this;
        var payload = {
            "request": request,
            "responseSent": false,
            "requestTime": firebase.firestore.Timestamp.now()
        };

        that.apiCollection.add(payload).then(function (doc) {

            console.log("Request added at doc: ", doc.id);

            var unsubscribe = that.apiCollection.doc(doc.id)
                .onSnapshot(function (doc) {

                    // console.log("Updated Data : ", doc.data());
                    if (doc.data().response) {
                        responseHandler(doc.data().response);
                        unsubscribe();
                    }
                }, function (err) {
                    console.log("Error in receiving the response", err);
                    errorHandler({ responseError: err });
                });

        }).catch(function (err) {
            console.log("Error in sending the request", err);
            errorHandler({ requestError: err });
        });
    }

    // responseReceived(responseData) {
    //     console.log('I am responseReceived');
    //     console.log(responseData);
    // }

    // globalListener() {
    //     apiCollection.where("A", "==", "1")
    //         .onSnapshot(function (docs) {
    //             var cities = [];
    //             docs.forEach((doc) => {
    //                 cities.push(doc.data().A);
    //             });
    //             console.log("Current cities in CA : ", cities.join(", "));

    //         });
    // }
}

