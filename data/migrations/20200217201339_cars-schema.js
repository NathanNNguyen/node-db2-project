// The changes you wanna make
exports.up = function (knex) {
  // create the table
  // define the schema

  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.decimal('VIN').notNullable().unique();
    tbl.string('make', 128);
    tbl.string('model', 128);
    tbl.decimal('milage');
  })
};

// Undo the changes function
exports.down = function (knex) {
  // drop the table

  return knex.schema.dropTableIfExists('cars');
};
