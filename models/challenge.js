const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Challenge extends Model {}

Challenge.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        starting_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ending_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        repetitions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
              unique: false
            }
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'challenge',
    }
);

module.exports = Challenge;