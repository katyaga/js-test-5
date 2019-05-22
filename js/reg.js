const regButton = document.querySelector('.reg-button');

// Ф-ция получения информации из localstorage, возвращает массив пользователей
function getUsers() {
  const users = localStorage.getItem('users');
  if (users) {
    return JSON.parse(users);
  } return [];
}

// Ф-ция сохраняет в localstorage массив пользователей
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// eslint-disable-next-line consistent-return
function saveUser() {
  const userLogin = document.getElementById('inputLogin').value;
  const userEmail = document.getElementById('inputEmail').value;
  const userPassword = document.getElementById('inputPassword').value;
  const radios = document.getElementsByName('radio');
  let value;

  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = radios[i].value;
    }
  }

  const users = getUsers();
  // Массив пользователей с паролем, который ввёл текущий пользователь
  const exists = users.filter(item => item.login === userLogin);

  if (userLogin.length < 1 || userEmail.length < 1) {
    alert('Заполните поля!');
    return false;
  }

  if (exists.length > 0) {
    alert('Пользователь существует');
    return false;
  }

  const user = {
    login: userLogin,
    email: userEmail,
    status: value,
    password: userPassword,
  };

  users.push(user);
  saveUsers(users);
}

regButton.addEventListener('click', saveUser);
