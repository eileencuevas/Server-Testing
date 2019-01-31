
exports.up = function(knex, Promise) {
  return knex.schema.createTable('army', table => {
      table.increments();
      table.string('name', 128).notNullable().unique();
      table.string('unitClass', 128).notNullable();
      table.string('uniqueWeapon', 128).unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('army');
};
