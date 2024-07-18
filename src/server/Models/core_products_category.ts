import { DataTypes, Sequelize } from "sequelize";
import getDBConnection from "../db-connection/dbConnection";


const CoreProductCategorySchema = {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        collate: 'utf8mb4_general_ci'
    }
}


export const ProductCategory = getDBConnection().define("core_product_categories", CoreProductCategorySchema, { timestamps: false, underscored: true })