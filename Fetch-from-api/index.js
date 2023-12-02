const api_url = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    displayUsers(data);
  } catch (err) {
    console.log(err);
  }
}

function displayUsers(dataOfUsers) {
  const ul = document.querySelector(".list");

  dataOfUsers.forEach((user) => {
   const li = document.createElement('li');
   li.innerHTML = `
      <div>
      <p>${user.id}</p>
      <p>${user.name}</p>
      <p>${user.username}</p>
      <p>${user.email}</p>
      </div>
   `;
   ul.appendChild(li);
  });
}

fetchUsers();
