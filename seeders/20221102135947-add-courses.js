
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('courses', [
    {
      title: 'PHP',
      description: 'Bootcamp for PHP learning',
      weeks: '1',
      enroll_cost: 4500,
      minimum_skill: 'basic',
      bootcamp_id: 1
    },
    {
      title: 'PHP',
      description: 'Bootcamp for PHP learning',
      weeks: '3',
      enroll_cost: 4500,
      minimum_skill: 'basic',
      bootcamp_id: 2
    },
    {
      title: 'PHP',
      description: 'Bootcamp for PHP learning',
      weeks: '5',
      enroll_cost: 4500,
      minimum_skill: 'basic',
      bootcamp_id: 3
    },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('courses', null, {});
     
  }
};
