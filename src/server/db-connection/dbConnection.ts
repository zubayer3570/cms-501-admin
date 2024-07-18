import { Sequelize } from "sequelize";


// const syncModels = async () => {
//     await sequelize.sync()
// }

// syncModels()

const sequelize = new Sequelize(
    process.env.DB_NAME || "",
    process.env.DB_USER || "",
    process.env.DB_PASSWORD || "",
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: "mysql",
        dialectModule: require("mysql2"),
    }
)
export default function getDBConnection() {
    return sequelize;
}