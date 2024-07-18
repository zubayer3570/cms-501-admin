import { Model, ModelStatic } from "sequelize";

export const dbDelete = async (table: ModelStatic<Model<any, any>>, query: any) => {
    const deletedRows = await table.destroy({ where: query })
    return { deletedRows }
}