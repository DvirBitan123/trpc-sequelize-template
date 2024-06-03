import { Op } from "sequelize";
import { Example } from "../models/sequelizeModels";
import { UpdateInput } from "../types/interfaces";

export const getAll = async () => {
    try {
      const allData = await Example.findAll({raw: true});
      if (allData === undefined || null) {
        console.log('error!!');
        throw new Error('data not found');
      }
      return allData
    } catch (error) {
      throw error
    }
};

export const getById = async (ID: string) => {
    try {
        const dataById = await Example.findOne({where: { id : ID }});
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
        const newObj = await Example.create(
            { name: ObjName },
            { fields: ['name'] }, // allows which fields can be modyfied
        );
        return newObj
    } catch (error) {
        throw error
    }
};

export const updateById = async (input: UpdateInput) => {
  const {ID, nameToUpdate} = input;
  try {
    const updateRes  = await Example.update(
      { name: nameToUpdate },
      { where: { id: ID } },
    );
  } catch (error) {
    throw error
}
};

export const deleteByName = async (ObjName: string) => {
    try {
        const deleteRes = Example.destroy({
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
        const deleteRes = Example.destroy({
            where : {
                [Op.or]: [{ id: ID }, { name: ObjName }],
            }
        });
        return deleteRes
    } catch (error) {
        throw error
    }
};
