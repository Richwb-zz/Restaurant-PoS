module.exports = (sequelize, DataTypes) => {
    const coupons = sequelize.define("coupons", {
        coupon_code: {
            type: DataTypes.UUIDV1,
            default: DataTypes.UUIDV1,
            allowNull: False
        },
        start_date: {
            type: DataTypes.Date,
            allowNull: False
        },
        expire_date: {
            type: DataTypes.Date,
            allowNull: False             
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: False,
            default: 0.00
        },
        active: {
            type: DataTypes.Boolean,
            allowNull: False,
            default: False
        }
    });

}