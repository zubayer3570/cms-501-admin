import { DataTypes } from "sequelize";
import getDBConnection from "../db-connection/dbConnection";

const Blog_Category_Schema = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    _lft: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    _rgt: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    create_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    update_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    deleted_at: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    origin_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    lang: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}

export const Blog_Category = getDBConnection().define("core_blogs_category", Blog_Category_Schema, { timestamps: false })