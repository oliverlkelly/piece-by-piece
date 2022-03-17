const signupFormHandler = async (event) => {
    event.preventDefault();
  // Collect values from the signup form
    const fName = document.querySelector('#fName').value.trim();
    const lName = document.querySelector('#lName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const cPassword = document.querySelector('#cPassword').value.trim();
    
    // Check if all fields are provided by user 
    if (fName && lName && email && password && cPassword) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ fName, lName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.signupForm').addEventListener('submit', signupFormHandler);