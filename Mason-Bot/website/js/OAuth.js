function getCookie(cname, ret) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

const username = getCookie("username")
const discriminator = getCookie("discriminator")
const avatar = getCookie("avatar")
const id = getCookie("id")

if (username && discriminator) {
  var img = document.createElement('img');
  img.src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;
  img.style = 'width: 35px; text-align: center; position: relative; top: 10px; border-radius: 100px;'

  var welcome = document.getElementById("welcome")
  welcome.parentNode.removeChild(welcome);

  const mainwelcome = document.getElementById('main-welcome')
  mainwelcome.appendChild(img);

  var t = document.createTextNode(`Bonjour ${username}#${discriminator}!`);     // Create a text node
  mainwelcome.appendChild(t);
  mainwelcome.style = "text-align: center; position: relative; left: 20px; "
}