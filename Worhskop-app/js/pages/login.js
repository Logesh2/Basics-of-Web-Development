(function()
{
    let loginForm;

    function addEventListeners()
    {
        loginForm.addEventListener('submit', function(event)
        {
            event.preventDefault();




            const credentials=
            {
                email:document.getElementById('email').value.trim(),
                password:document.getElementById('password').value.trim()
            };

            // if everything is valid
            login( credentials )
                .then(
                    function( loginResponse ) {
                        console.log( loginResponse );
                    }
                )
                .catch(
                    function( error ) {
                        alert( error.response );
                    }
                );
        });
    }

    window.addEventListener( 'load', function() {
        loginForm = document.getElementById( 'login-form' );
        
        addEventListeners();
    });
})();