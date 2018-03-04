'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Videos', {
            id: {
                allowNull: false,
                type: Sequelize.STRING
            },
            timestamp: {
                allowNull: false,
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
        })
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Videos')
    }
}