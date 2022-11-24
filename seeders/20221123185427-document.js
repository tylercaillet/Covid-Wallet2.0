"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let documents = [
      {
        title: "Vaccination Card",
        DOB:
          "06/08/1995",
        first: "May 13, 2021",
        second: "June 3, 2021",
        description:
          "First and second dose were Pfizer",
        image:
          "https://www.pewtrusts.org/-/media/post-launch-images/2021/09/ap_21180592440374/1x1_s.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Booster Shot",
        DOB:
          "06/08/1995",
        first: "October 3, 2021",
        second: "October 3, 2021",
        description:
          "Pfizer booster shot.",
        image:
          "'https://wp.dailybruin.com/images/2022/01/web.news_.booster.requirement.CM_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Last Covid Test",
        DOB:
          "06/08/1995",
        first: "October 21, 2022",
        second: "November 4, 2022",
        description:
          "First test was in October and two weeks later another test was taken",
        image:
          "https://thumbs.dreamstime.com/z/covid-test-results-using-rt-pcr-method-rapid-antibody-showed-negative-positive-respectively-217100829.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Last tested positive for Covid",
        DOB:
          "06/08/1995",
        first: "July 6, 2022",
        second: "July 13,2022",
        description:
          "Inital test positive first and second test postive",
        image:
          "https://charlescountycovid.org/wp-content/uploads/2022/04/iHealth--1024x683.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ];
    await queryInterface.bulkInsert("documents", documents);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("documents");
  }
};

