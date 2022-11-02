'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bootcamps', 
    [
      {Name: 'PHP Bootcamp',
       description: 'Bootcamp for PHP learning',
       phone: '(57)3223369601',
       average_cost: 4700,
       average_ratinng: 3,
       user_id: 1},

      {Name: 'Express Backend',
      description: 'Bootcamp for Javascript learning',
      phone: '(57)611111111111',
      average_cost: 4500,
      average_ratinng: 3,
      user_id: 2},

      {Name: 'CSS Bootcamp',
      description: 'Bootcamp for CSS learning',
      phone: '(57)364545456455',
      average_cost: 4500,
      average_ratinng: 3,
      user_id: 3}
    ], {});

  },
  async down (queryInterface, Sequelize) 
  {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
