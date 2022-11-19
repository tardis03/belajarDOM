const email = document.querySelector("email");
const password = document.querySelector("password");
const tesBtn = document.querySelector("button");
const container = document.querySelector(".login");

tesBtn.onclick = () => {
    alert(`meload login page`);
    container.innerHTML = (`<label for="email">Email</label>
    <input type="email" id="email" placeholder="masukkan email"></input>
    <br>
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="masukkan password"></input>
    `);
}