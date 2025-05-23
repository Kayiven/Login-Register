const loginBtn = document.getElementById('loginBtn');
const loading = document.getElementById('loading'); // your loading div

loginBtn.onclick = (event) => {
 event.preventDefault();

 const userInput = document.getElementById('Nickname');
 const passInput = document.getElementById('Password');
 const user = userInput.value.trim();
 const pass = passInput.value.trim();

 const isUserValid = user.length > 0;
 const isPassValid = pass.length > 0;
 const allValid = isUserValid && isPassValid;

 if (!allValid) {
  // Invalid: red inputs + red button
  userInput.style.boxShadow = isUserValid ? '' : '0 0 5px 2px red';
  passInput.style.boxShadow = isPassValid ? '' : '0 0 5px 2px red';

  loginBtn.style.backgroundColor = '#9f1a1a';
  loginBtn.style.color = 'white';
  loginBtn.disabled = true;

  // Stay red for 5 seconds, then reload page
  setTimeout(() => {
   location.reload();
  }, 5000); // 5,000 ms = 5 seconds
 } else {
  // Valid: green inputs + green button
  userInput.style.boxShadow = '0 0 5px 2px green';
  passInput.style.boxShadow = '0 0 5px 2px green';

  loginBtn.style.backgroundColor = '#178124';
  loginBtn.style.color = 'white';
  loginBtn.disabled = true;

  // Show loading for 5 minutes (300,000 ms)
  loading.style.display = 'none';

  setTimeout(() => {
   loading.style.display = 'none';
   window.location.href = "welcome.html";
  }, 10000); // 10 sc in milliseconds
 }
};