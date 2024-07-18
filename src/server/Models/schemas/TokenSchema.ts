import { DataTypes } from "sequelize";

export const TokenSchema = {
    user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}