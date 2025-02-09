import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
	MONGO_CONNECTION_STRING: get('MONGO_CONNECTION_STRING').required().asString(),
};
