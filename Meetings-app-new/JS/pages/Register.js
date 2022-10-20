(function(){

    let Register;
    registerForm= document.querySelector("#myform");

    function addEventListeners(){
        Register.addEventListener("submit",function(event){
            event.preventDefault();
        

        const user={
            name: document.querySelector("#name").value.trim(),
            email: document.querySelector("#email").value.trim(),
            password: document.querySelector("#password").value.trim()
            
        };

        register(user)
        .then(function (registerResponse){
            console.log(registerResponse);
            return registerResponse;
        })
        .catch( function (error){
            alert(error.response);
        });

    });
    }


    window.addEventListener("load", function(){
        registerForm= document.querySelector("#myform");
        addEventListeners();
    });
})();