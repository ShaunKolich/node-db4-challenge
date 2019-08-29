
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable();
    }) 
        .createTable('shopping_list', tbl => {
            tbl.increments();
            tbl.float('quantity', 10).notNullable();
            tbl.string('ingredients_portion', 128).notNullable();
            
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('steps', 128).notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('shopping_list')
            
    })
};

exports.down = function(knex) {
  
};
