const bycript = require("bcrypt");
const mockUsers = [
  {
    name: "John Poe",
    email: "johnpoe@yahoo.com",
    password: bycript.hashSync("john1234", 10),
    isAdmin: true,
  },
  {
    name: "Ella Mai",
    email: "ellamaii@yahoo.com",
    password: bycript.hashSync("ela12345", 10),
    isAdmin: false,
  },
  {
    name: "Don bee",
    email: "donbee@yahoo.com",
    password: bycript.hashSync("don1234", 10),
    isAdmin: false,
  },
];

module.exports = mockUsers;
