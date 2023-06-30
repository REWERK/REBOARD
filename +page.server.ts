import { error } from '@sveltejs/kit';
import oracledb from 'oracledb';
import type { get } from 'svelte/store';
let clientOpts = {};
const config = {
	user: <username>,
	password: mypw,
	connectString: <host>
};

// enable Thick mode which is needed for SODA
oracledb.initOracleClient(clientOpts);

const mypw = <pass>; // set mypw to the hr schema password

const query = {
	reqtime: {
		day: `SELECT COUNT(*)
		  			FROM <tablename>
		  			WHERE <columnname> >= TRUNC(SYSDATE) + INTERVAL '6' HOUR
						AND <columnname> < TRUNC(SYSDATE) + INTERVAL '18' HOUR`,

		night: `SELECT COUNT(*)
		  			FROM <tablename>
		  			WHERE (<columnname> >= TRUNC(SYSDATE) + INTERVAL '6' HOUR
				 	AND <columnname> < TRUNC(SYSDATE) + INTERVAL '1' DAY)
			 			OR (<columnname> >= TRUNC(SYSDATE) 
						 AND <columnname> < TRUNC(SYSDATE) + INTERVAL '6' HOUR);`
	},

	donetime: {
		day: `SELECT COUNT(*)
					FROM <tablename>
					WHERE <columnname> >= TRUNC(SYSDATE) + INTERVAL '6' HOUR
					  AND <columnname> < TRUNC(SYSDATE) + INTERVAL '18' HOUR`,

		night: `SELECT COUNT(*)
					FROM <tablename>
					WHERE (<columnname> >= TRUNC(SYSDATE) + INTERVAL '6' HOUR
				   AND <columnname> < TRUNC(SYSDATE) + INTERVAL '1' DAY)
					   OR (<columnname> >= TRUNC(SYSDATE) 
					   AND <columnname> < TRUNC(SYSDATE) + INTERVAL '6' HOUR);`
	},

	qrwithdraw: {
		day: `SELECT COUNT(*)
		FROM <tablename>
		WHERE <columnname> >= TRUNC(SYSDATE) + INTERVAL '6' HOUR
		  AND <columnname> < TRUNC(SYSDATE) + INTERVAL '18' HOUR`,

		night: `SELECT COUNT(*)
		FROM <tablename>
		WHERE (<columnname> >= TRUNC(SYSDATE) + INTERVAL '6' HOUR
	   AND <columnname> < TRUNC(SYSDATE) + INTERVAL '1' DAY)
		   OR (<columnname> >= TRUNC(SYSDATE) 
		   AND <columnname> < TRUNC(SYSDATE) + INTERVAL '6' HOUR);`
	}
};

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const connection = await oracledb.getConnection({
		user: <username>,
	    password: mypw,
	    connectString: <host>
	});
	const hours = new Date().getHours();

	const result = (await connection.execute(
		hours >= 6 && hours < 18 ? query.reqtime.day : query.reqtime.night
	)) as any;

	const result2 = (await connection.execute(
		hours >= 6 && hours < 18 ? query.donetime.day : query.donetime.night
	)) as any;

	const result4 = (await connection.execute(
		hours >= 6 && hours < 18 ? query.qrwithdraw.day : query.qrwithdraw.night
	)) as any;

	console.log(result.rows);
	return {
		total: result?.rows[0]['COUNT(*)'] ?? 0,
		total2: result2?.rows[0]['COUNT(*)'] ?? 0,
		total4: result4?.rows[0]['COUNT(*)'] ?? 0
	};
}
