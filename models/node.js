module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        itemName: DataTypes.STRING,
        image: DataTypes.STRING,
        public: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    Item.associate = function (models) {
        Item.belongsTo(models.User, {as: "creator"});
    }
    return Item;
};