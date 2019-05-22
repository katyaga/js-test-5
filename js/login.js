const loginButton = document.querySelector('.login-button');

function getUsers() {
  const users = localStorage.getItem('users');
  if (users) {
    return JSON.parse(users);
  }
  return [];
}

// Ф-ция проверяет правильность введённых данных для входа на сайт
function logIn() {
  const users = getUsers('users');
  const login = document.querySelector('.login-login').value;
  const password = document.querySelector('.login-password').value;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].login === login) {
      if (users[i].password === password) {
        alert('Вы вошли на сайт');
      } else {
        alert('Проверьте введённые данные');
      }
    }
  }
}

loginButton.addEventListener('click', logIn);
