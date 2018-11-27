module.exports = function (sequelize, DataTypes) {
    var WhereIs = sequelize.define("WhereIs", {
        location: DataTypes.TINYINT
    });
    WhereIs.associate = function (models) {
        WhereIs.belongsTo(models.Game, {as: "game"});
        WhereIs.belongsTo(models.Item, { as: "node"});
    }
    return WhereIs;
};