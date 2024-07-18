import sequelize from 'sequelize'

const CorePagesSchema = {
    id: {
        type: sequelize.DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    }
}
