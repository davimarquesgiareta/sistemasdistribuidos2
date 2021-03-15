
exports.up = function(knex) {
  return knex.schema.createTable('guitars', table =>{
      table.increments('id').primary()
      table.string('brands').notNull()
      table.string('type').notNull()
      table.string('price').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('guitars')
};
