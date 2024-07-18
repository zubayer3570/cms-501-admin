import { Model, ModelStatic } from "sequelize";

export const dbInsert = async (table: ModelStatic<Model<any, any>>, data: any) => {
    await table.sync();
    const insertedData: Model<any, any> = await table.create(data);
    return insertedData;
}