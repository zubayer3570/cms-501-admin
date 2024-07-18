import { DataTypes } from "sequelize";

export const CoreProductCategorySchema = {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    category_name: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
        collate: 'utf8mb4_general_ci'
    }
}