function register(user) {
    return fetch(`https://mymeetingsapp.herokuapp.com/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(function (registerResponse) {
        console.log(registerResponse.status);
        return registerResponse;
      });
  }
  
  
  async function login( credentials ) {
    const response = await fetch(
        `https://mymeetingsapp.herokuapp.com/api/auth/login`,
        {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    if (!response.ok) {

        throw new Error(response.statusText);
    }

    alert("Logged in successfully");
    const loginResponse = await response.json();
    // store the details in localStorage
    localStorage.setItem('email', loginResponse.email);
    localStorage.setItem('token', loginResponse.token);
    localStorage.setItem('role', loginResponse.role);
    localStorage.setItem('name', loginResponse.name);
    return loginResponse;
}

function getToken() {
    return localStorage.getItem( 'token' );
}

function getEmail() {
    return localStorage.getItem( 'email' );
}

function getRole() {
    return localStorage.getItem( 'role' );
}
function getName() {
    return localStorage.getItem( 'name' );
}

function logout() {
    localStorage.clear();
}