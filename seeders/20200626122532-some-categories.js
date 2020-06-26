("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Chocolate",
          description:
            "Craving chocolate and seeking refreshment at the same time? Ice Ice Baby is giving you the best of both.",
          imageUrl:
            "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/11/chocolate-ice-cream-recipe-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Italian",
          description:
            "Dream away with our delicious italian inspired flavors such as pistacchio and fior di latte. Mamma mia!",
          imageUrl:
            "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/11/chocolate-ice-cream-recipe-2.jpg",
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
    return queryInterface.bulkDelete("categories", null, {});
  },
};
