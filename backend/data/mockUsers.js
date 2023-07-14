const bycript = require("bcrypt");
const mockUsers = [
  {
    name: "John Poe",
    email: "johnpoe@yahoo.com",
    password: bycript.hashSync("ela1234", 10),
    isAdmin: true,
  },
  {
    name: "Ella Mai",
    email: "ellamai@yahoo.com",
    password: bycript.hashSync("ela1234", 10),
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
