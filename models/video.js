'use strict'

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Video', {timestamp: DataTypes.STRING })
}