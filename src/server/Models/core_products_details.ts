import { DataTypes, Sequelize } from "sequelize";
import getDBConnection from "../db-connection/dbConnection";
import { Product } from "./core_products";


const CoreProductDetailsSchema = {
    detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    detail_type: {
        type: DataTypes.INTEGER
    },
    detail_description: {
        type: DataTypes.TEXT,
    },
    detail_url: {
        type: DataTypes.STRING(255),
        collate: 'utf8mb4_general_ci'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
};

// Product.hasOne(ProductDetails)

export const ProductDetails = getDBConnection().define("core_products_detail", CoreProductDetailsSchema, { timestamps: true, underscored: true })