import mongoose from 'mongoose';
import { envs } from '../../../core/config/env';
import { Logger } from '@nestjs/common';
import { HttpFunction } from '@google-cloud/functions-framework';
import { Request, Response } from 'express';

/**
 * Since the mongoose module exports a singleton object,
 * you don't have to connect in your test.js to check the state of the connection:
 *
 * https://stackoverflow.com/questions/19599543/check-mongoose-connection-state-without-creating-new-connection
 *
 * @returns boolean
 */
const isConnected = (): boolean => {
	const state = mongoose.connection.readyState;

	return state === 1;
};

export const withDb =
	(func: (req: Request, res: Response) => Promise<void>): HttpFunction =>
	async (req: Request, res: Response) => {
		const logger = new Logger();
		try {
			if (isConnected()) {
				logger.log('MongoDB is already connected');
			} else {
				await mongoose.connect(envs.MONGO_CONNECTION_STRING);
				logger.log('Connected to DB');
			}
		} catch (error) {
			logger.error(error);
		}

		await func(req, res);
	};
