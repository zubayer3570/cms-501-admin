import { DataTypes, Sequelize } from "sequelize";


export const CoreProductDetailsSchema = {
    detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    detail_type: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    detail_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    detail_url: {
        type: DataTypes.STRING(255),
        allowNull: true
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