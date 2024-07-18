import { DataTypes } from "sequelize";

export const CoreProductSchema = {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        collate: 'utf8mb4_general_ci'
    },
    description: {
        type: DataTypes.TEXT,
        collate: 'utf8mb4_general_ci'
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: null
    },
    category: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        collate: 'utf8mb4_general_ci'
    },
    framework: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        collate: 'utf8mb4_general_ci'
    },
    demo_url: {
        type: DataTypes.STRING(255),
        defaultValue: null,
        collate: 'utf8mb4_general_ci'
    },
    backend_url: {
        type: DataTypes.STRING(255),
        defaultValue: null,
        collate: 'utf8mb4_general_ci'
    },
    server_requirements: {
        type: DataTypes.TEXT,
        collate: 'utf8mb4_general_ci'
    },
    support_info: {
        type: DataTypes.TEXT,
        collate: 'utf8mb4_general_ci'
    },
    release_date: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    last_update: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    author: {
        type: DataTypes.STRING(255),
        defaultValue: null,
        collate: 'utf8mb4_general_ci'
    },
    version: {
        type: DataTypes.STRING(10),
        defaultValue: null,
        collate: 'utf8mb4_general_ci'
    },
    rating: {
        type: DataTypes.DECIMAL(2, 1),
        defaultValue: null
    },
    sales: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    tags: {
        type: DataTypes.TEXT,
        defaultValue: null,
        collate: 'utf8mb4_general_ci'
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    // },
    // updated_at: {
    //     type: DataTypes.DATE,
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    // }
};