import { DataTypes } from "sequelize";

export const AdminUserSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_login: {
        type: DataTypes.STRING,
        allowNull: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    permission: {
        type: DataTypes.STRING,
        allowNull: true
    },
}