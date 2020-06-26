("use strict");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          title: "Milk Chocolate",
          categoryId: 1,
          description: "The go-to classic for chocolate fans",
          imageUrl:
            "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/11/chocolate-ice-cream-recipe-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chocolate fudge",
          categoryId: 1,
          description:
            "Double the fun with this fudge swirled chocolate goodness!",
          imageUrl:
            "https://ketopots.com/wp-content/uploads/2019/05/5a-keto-chocolate-ice-cream-square.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pistacchio",
          categoryId: 2,
          description:
            "This is what dreams are made of! Made with sicilian pistaccios.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2020%2F01%2Fmain%2Fpistachio_ice_cream-s.jpg%3Fitok%3D69S2wWYE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
