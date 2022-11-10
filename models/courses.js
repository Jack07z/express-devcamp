'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        unique(value) {
          
          return courses.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('title ya utilizado');
              }
            })
        },
        isAlpha: {
          args: true,
          msg: "title debe tener solo letras"
        },
        notNull: {
          args: true,
          msg: "title debe estar presente"
        },
        notEmpty: {
          args: true,
          msg: "title no debe ser vacio"
        },
      }
    },
    description: {
      type:DataTypes.STRING,
      validate: {
        len:{
          args:[10,50],
          msg:"description minimo 10 y maximo 50 caracteres"
        }
      }
    },
    weeks: {
      type:DataTypes.STRING,
      allowNull: false,
      isDate: true, 
      validate: {
        notEmpty: {
          args: true,
          msg: "weeks no debe ser vacio"
        },
      }
    },
    enroll_cost: {
      type:DataTypes.STRING,
      allowNull: false,
      isNumeric: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "cost no debe ser vacio"
        },
      }
    },
    minimum_skill: {
      type:DataTypes.STRING,
      validate: {
        len:{
          args:[10,50],
          msg:"description minimo 10 y maximo 50 caracteres"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'courses',
    timestamps: false
  });
  return courses;
};