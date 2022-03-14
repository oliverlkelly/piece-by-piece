const User = require('./user');
const Challenge = require('./challenge');


User.hasMany(Challenge, {
    foreignKey: 'user_id'
});

Challenge.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

module.exports = { User , Challenge };
