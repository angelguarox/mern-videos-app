import {Sequelize} from 'sequelize';
import {database} from '../config/variables';

const sequelize = new Sequelize('mernvideosapp', 'root', '098098', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 10,
		min: 0,
		require: 30000,
		idle: 10000
	},
	logging: false
});

try{
	sequelize.authenticate()
	.then(db => console.log('DATABASE IS CONNECTED'))
	.catch(e => console.error('NOT CONNECTED AT DATABASE:', e));
}
catch(e){
	console.error('ERROR IN CONNECTION:', e);
}

export default sequelize;