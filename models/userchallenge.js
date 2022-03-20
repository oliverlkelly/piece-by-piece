const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// const Challenge = require('./challenge');
// const User = require('./user');

class Score extends Model {}
Score.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        //   },
        user_score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        challenge_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
              model: 'challenge',
              key: 'id',
              unique: false
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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