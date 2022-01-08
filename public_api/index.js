const api = new JHTexAPI();


function X(params) {
    console.log("Request is :", params);
    api.sendRequest(
        params,
        function (response) {
            console.log("Response is :", response);
            // prompt(response.sending)
        },
        function (err) {
            console.log(err);
        });

}

window.onload = function () {
    console.log('page is fully loaded');
    // X(unit);
};