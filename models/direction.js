module.exports = function (sequelize, DataTypes) {
    var Direction = sequelize.define("Direction", {
        stepNum: DataTypes.TINYINT,
        forward: DataTypes.BOOLEAN
    });
    Direction.associate = function (models) {
        Direction.belongsTo(models.Game, {as: "game"});
    }
    return Direction;
};