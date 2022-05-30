const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {

    countryId: {
      type: DataTypes.UUID,
      allowNull: false,
      default: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificult: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
    },
  }, {timestamps: false});
};