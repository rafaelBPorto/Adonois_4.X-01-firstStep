'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetSchema extends Schema {
  up () {
    this.create('tweets', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned() //Valor não pode ser abaixo de zero
        .notNullable() //Não poder ser nulo
        .references('id') //Foreign Key
        .inTable('users') // Local da FK
        .onUpdate('CASCADE') //modificação na tabela user modifica aqui também
        .onDelete('CASCADE') ////exclusão na tabela user excluir aqui também
      table.string('content', 240).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
