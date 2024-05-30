import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize/connectionToDB";
import { v4 as uuidv4 } from 'uuid';


export const ExampleModel = sequelize.define<Model>('categories', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    createdAt: false,
    updatedAt: false
  }
);


export class ExampleModel2 extends Model {}

ExampleModel2.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    // Other model options go here
    createdAt: false,
    updatedAt: false,
    sequelize, // We need to pass the connection instance
    modelName: 'ExampleModel2', // We need to choose the model name
  },
);

