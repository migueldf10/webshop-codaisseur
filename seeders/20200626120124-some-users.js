const bcrypt = require("bcrypt");
("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "John Smith",
          email: "john@greeting.com",
          password: bcrypt.hashSync(password, 10),
          address: "Onestreet 2, 1028WC1, London, United Kingdom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Anne Jones",
          email: "anne@greeting.com",
          password: bcrypt.hashSync(password, 10),
          address: "Teststraat 1, 1023KM, Rotterdam, Netherlands",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
