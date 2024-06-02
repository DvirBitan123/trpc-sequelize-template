import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize/connectionToDB";
import { v4 as uuidv4 } from 'uuid';


export const Example = sequelize.define<Model>('Example', {
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
    updatedAt: false,
    tableName: 'Example'
  }
);


// export class Example extends Model {}

// Example.init(
//   {
//     // Model attributes are defined here
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       allowNull: false,
//       defaultValue: () => uuidv4()
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//   },
//   {
//     createdAt: false,
//     updatedAt: false,
//     sequelize,
//     modelName: 'Example', // We need to choose the model name
//   },
// );

