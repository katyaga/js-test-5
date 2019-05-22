const regButton = document.querySelector('.reg-button');

function getUsers() {
  const users = localStorage.getItem('users');
  if (users) {
    return JSON.parse(users);
  } return [];
}

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
  // let user;
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
