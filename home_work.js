//перше завдання
function validateEmail(email) {
  return true;
}

//друге завдання
function validateEmail(email) {
  if (email == "") return false;
  if (email.length > 5) return false;
  if (typeof email != "string") return false;
  if (email.split("@").length !== 1) return false;
  if (!email.split("").includes("@") || email.split("")[0] === "@")
    return false;
  if (!email.split("@") || email.indexOf("@") >= email.indexOf("."))
    return false;
  return true;
}
