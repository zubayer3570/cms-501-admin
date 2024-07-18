import { Model, ModelStatic } from "sequelize";

export const dbUpdate = async (table: ModelStatic<Model<any, any>>, update: any, where: any = {}) => {
    const [count] = await table.update(update, { where: where })
    return { count }
}