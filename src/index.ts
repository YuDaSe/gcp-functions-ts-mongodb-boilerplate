import * as functions from '@google-cloud/functions-framework';
import { withDb } from './data/db/utils/with-db';
import commandExecutor from './gcp-functions/command-executor';

functions.http('gcp-functions-ts-mongodb-boilerplate', withDb(commandExecutor));