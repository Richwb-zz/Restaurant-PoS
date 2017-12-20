module.exports = (sequelize, DataTypes) => {
    const reciept = sequelize.define("reciept", {
        table: {
            type: DataTypes.TINYINT,
            allowNull: False
        },
        items: {
            type: DataTypes.JSON,
            allowNull: True
        },
        sub_total: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00,
            allowNull: True
        },
        tax: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00,
            allowNull: False
        },
        total: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00,
            allowNull: False
        },
        paid: {
            type: DataTypes.Boolean,
            defaultValue: False,
            allowNull: False
        }
    });

    return reciepts;
}