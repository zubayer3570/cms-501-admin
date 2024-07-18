import { DataTypes } from "sequelize";
import getDBConnection from "../db-connection/dbConnection";



const PricingSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    location: DataTypes.STRING,
    pricing: DataTypes.STRING
}

export const Pricing = getDBConnection().define('pricing', PricingSchema)