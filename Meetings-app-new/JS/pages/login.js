

(function(){
    let loginForm;
    function addEventListeners(){
      loginForm.addEventListener('submit',function(event)
      {
          event.preventDefault();
  
          const credentials=
          {
              email:document.querySelector('#email').value,
              password:document.querySelector('#password').value,
          };
  
          login(credentials)
             .then(
              function(loginResponse){
                  console.log(loginResponse);
                  window.location.href="../../HTML/calendar.html";
  
              }
             )
  
             .catch(
              function(error)
              {
                  alert(error.message);
              }
             );
      }
      );
  }
  
    window.addEventListener('load',function(){
      loginForm=document.querySelector('#myform');
      addEventListeners();
    });
  
  
  
  })();
  
  