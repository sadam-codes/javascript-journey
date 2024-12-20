function user_info(username) {
  this.username = username;
}

function user_infoTwo(username, email, password) {
  user_info.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new user_infoTwo("sadam", "sadam@gmail.com", "123");
console.log(user);
