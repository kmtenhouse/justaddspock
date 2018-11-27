module.exports = function (sequelize, DataTypes) {
    var Verb = sequelize.define("Verb", {
        verbText: DataTypes.STRING
    });
    Verb.associate = function (models) {
        Verb.belongsTo(models.Game, {as: "game"});
        Verb.belongsTo(models.Item, { as: "winner"});
        Verb.belongsTo(models.Item, { as: "loser"});
    }
    return Verb;
};