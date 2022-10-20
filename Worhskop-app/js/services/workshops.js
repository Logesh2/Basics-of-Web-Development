const getWorkshops = function() {
    return fetch('https://workshops-server.herokuapp.com/workshops')
            .then(function (response) {
                if (!response.ok) {
                    // for 404 kind of errors, we should check and explcitly throw an error
                    throw new Error(response.statusText);
                }

                return response.json();
            });
}

const addWorkshop = function( workshop ) {
    return fetch(
        `http://localhost:3000/workshops`,
        {
            method: 'POST', // better to use ALL CAPS for the method
            body: workshop,
            headers: {
                // Authorization: "sdkbkjwbejwbveiwbviwb"
                "Content-Type": "application/json"
            }
        }
    )
        .then(
            function( response ) {
                if (!response.ok) {
                    // for 404 kind of errors, we should check and explcitly throw an error
                    throw new Error(response.statusText);
                }

                return response.json();
            }
        )
}