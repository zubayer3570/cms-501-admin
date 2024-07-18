import { DataTypes } from "sequelize";











export const PaymentSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    payment_gateway: {
        type: DataTypes.STRING,
        allowNull: true
    },
    amount: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: true
    },
    converted_amount: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    converted_currency: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    exchange_rate: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    transaction_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}