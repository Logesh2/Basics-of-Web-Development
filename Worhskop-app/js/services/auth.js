function login( credentials ) {
    return fetch(
        `http://localhost:3000/login`,
        {
            method: 'POST', // better to use ALL CAPS for the method
            body: JSON.stringify( credentials ),
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
        );
}