import { DataTypes } from "sequelize";
import getDBConnection from "../db-connection/dbConnection";

const CoreBlogSchema = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    title: {
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
    cat_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    image_id: {
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
    origin_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    lang: {
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
    author_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
}

export const Core_Blog = getDBConnection().define("core_blog", CoreBlogSchema, { timestamps: false })