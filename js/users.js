function getUsers() {
  const users = localStorage.getItem('users');
  if (users) {
    return JSON.parse(users);
  } return [];
}

function createUsers() {
  const users = getUsers('users');
  for (let i = 0; i < users.length; i += 1) {
    const table = document.querySelector('.table');
    const user = document.createElement('tr');
    const userNumber = document.createElement('th');
    userNumber.scope = 'row';
    userNumber.innerHTML = i + 1;
    const login = document.createElement('td');
    login.innerHTML = users[i].login;
    const status = document.createElement('td');
    status.innerHTML = users[i].status;
    const email = document.createElement('td');
    email.innerHTML = users[i].email;
    user.appendChild(userNumber);
    user.appendChild(status);
    user.appendChild(login);
    user.appendChild(email);
    table.appendChild(user);
  }
}

createUsers();
