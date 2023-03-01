"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      firstName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
