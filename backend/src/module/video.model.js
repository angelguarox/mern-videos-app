import {DataTypes} from 'sequelize';
import sequelize from '../database/database';

const Video = sequelize.define('videos', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	title: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	url: {
		type: DataTypes.TEXT,
		unique: true,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false
	}
});

export default Video;