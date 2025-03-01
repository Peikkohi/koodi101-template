var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var ChatMessage = sequelize.define('chats', {
  temperature: Sequelize.INTEGER,
}, {
  timestamps: true,
  instanceMethods: {
    toJSON: async function () {
      return {
        // This is a unique id that is generated automatically
        id: this.id,
        // This also comes for free
        createdAt: this.createdAt,
        temperature: this.temperature,
      };
    },
  },
});

module.exports = ChatMessage;
