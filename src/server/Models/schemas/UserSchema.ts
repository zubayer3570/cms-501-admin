import { DataTypes } from "sequelize";

export const UserSchema = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        alllowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    business_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    google_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    google_login: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nationality: {
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
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_login_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role_id: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    stripe_customer_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    total_before_fees: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deleted_at: {
        type: DataTypes.TIME,
        allowNull: true
    },
    remember_token: {
        type: DataTypes.STRING,
        allowNull: true
    },
    verify_submit_status: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email_verified_at: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.STRING,
        allowNull: true
    }

}