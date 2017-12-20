module.exports = (sequelize, DataTypes) => {
    const coupons = sequelize.define("coupons", {
        coupon_code: {
            type: DataTypes.UUIDV1,
            default: DataTypes.UUIDV1,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        expire_date: {
            type: DataTypes.DATEONLY,
            allowNull: false             
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            default: 0.00
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    });
    return coupons;
}