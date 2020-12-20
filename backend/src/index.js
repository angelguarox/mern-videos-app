import app from './server/app';
import './database/database';

(async function main(){
	await app.listen(app.get('port'), () => {
		console.log(`SERVER IS RUNNING\nLOCALHOST: ${app.get('port')}`);
	});
})();