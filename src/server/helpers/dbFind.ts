import { Model, ModelStatic } from "sequelize";

export const dbFind = async (table: ModelStatic<Model<any, any>>, where: any, all: any = false) => {
    const data: any = await table.findAll({ where: where });
    if (all) {
        return data;
    } else {
        return data[0];
    }
}