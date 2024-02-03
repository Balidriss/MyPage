
import * as dotenv from 'dotenv';

dotenv.config({ path: 'ib.env' });

const host: string = process.env.MYSQL_HOST || '';
const user: string = process.env.MYSQL_USER || '';
const password: string = process.env.MYSQL_PASSWORD || '';
const database: string = process.env.MYSQL_DATABASE || '';


