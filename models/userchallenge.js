const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Score extends Model {}
Score.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        user_score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        challenge_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'challenge',
              key: 'id',
              unique: false
            }
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
        modelName: 'score',
    }
);

module.exports = Score;