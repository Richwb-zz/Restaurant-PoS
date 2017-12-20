module.exports = (sequelize, DataTypes) => {
	const menu = sequelize.define('menu', {
		name:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: {
					args: [50],
					msg: "Item name must not be longer then 50 characters"
				}
			}
		},
		description:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: {
					args: [150],
					msg: "description must not be longer then 50 characters"
				}
			}
		},
		cost:{
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		meal_type:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: {
					args: [15],
					msg: "Meal Type must not be longer then 15 characters"
				}
			}
		}
	});

	return menu;
}