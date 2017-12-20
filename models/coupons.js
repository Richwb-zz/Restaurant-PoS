module.exports = (sequelize, DataTypes) => {
    const coupons = sequelize.define("coupons", {
        coupon_code: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true
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
            defaultValue: 0.00
        },
        used: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        used_date:  {
            type: DataTypes.DATE
        }
    });

    coupons.prototype.validateCoupon = coupon => {
        if(this.used){
            return "coupon has already been used";
        }else if(this.start_date > Date.now()){
            return "coupon not valid until " + this.start_date;
        }else if(this.end_date < Date.now()){
            return "coupon expired on " + this.end_date
        }else{
            coupons.update({
                used: true,
                used_date: Date.now(),
            },{
                where: {
                    id: coupon.couponcode
                }
            })
            .success(result => result)
            .catch(error => error)
        }
    }

    return coupons;
}

