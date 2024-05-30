import { Op } from "sequelize";
import { ExampleModel2 } from "../models/sequelizeModels";

export const getAll = async () => {
    try {
      const allData = await ExampleModel2.findAll({raw: true});
      if (allData === undefined || null) {
        throw new Error('data not found');
      }
      return allData
    } catch (error) {
      throw error
    }
};

export const getById = async (ID: string) => {
    try {
        const dataById = await ExampleModel2.findOne({where: { id : ID }});
        if (dataById === undefined || null) {
            throw new Error('data not found');
        }
        return dataById
    } catch (error) {
        throw error
    }
};

export const createNewInstance = async (ObjName: string ) => { // replace with the required data and type
    try {
        const newObj = await ExampleModel2.create(
            { name: ObjName },
            { fields: ['name'] }, // allows which fields can be modyfied
        );
        return newObj
    } catch (error) {
        throw error
    }
};

export const deleteByName = async (ObjName: string) => {
    try {
        const deleteRes = ExampleModel2.destroy({
            where : {
                name: ObjName
            }
        });
        return deleteRes
    } catch (error) {
        throw error
    }
};

export const deleteByIdOrName = async (ObjName: string, ID?: string) => {
    try {
        const deleteRes = ExampleModel2.destroy({
            where : {
                [Op.or]: [{ id: ID }, { name: ObjName }],
            }
        });
        return deleteRes
    } catch (error) {
        throw error
    }
};
