import { DataTypes } from "sequelize";

export const InvoiceSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    payment_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gateway: {
        type: DataTypes.STRING,
        allowNull: true
    },
    total: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    currency: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    customer_notes: {
        type: DataTypes.STRING,
        allowNull: true
    },
    paid: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    is_paid: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    total_before_discount: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    coupon_amount: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
}