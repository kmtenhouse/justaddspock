module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    gameTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalNodes: DataTypes.TINYINT,
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  Game.associate = function(models) {
    Game.belongsTo(models.User, {as: "creator"});
  }
  return Game;
};