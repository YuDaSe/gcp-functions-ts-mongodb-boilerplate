import { getMockReq, getMockRes } from '@jest-mock/express';
import { withDb } from './data/db/utils/with-db';
import { UserDto } from './user/dto/user.dto';
import { COMMAND_QUERY_PARAM } from './gcp-functions/constants';
import GcpFunctionCommand from './gcp-functions/enums/gcp-function-command.enum';
import commandExecutor from './gcp-functions/command-executor';
import User from './data/db/schemas/user.schema';

describe('Basic app functionality', () => {

  afterAll(async () => {
    await User.deleteMany({}).exec();
  })

	test('Upsert user', async () => {
		const user: UserDto = {
			name: 'John',
			email: 'test@test.test'
		};

		const req = getMockReq({
			query: {
				[COMMAND_QUERY_PARAM]: GcpFunctionCommand.UPSERT_USER
			},
			body: user
		});
		const res = getMockRes().res;

		await withDb(commandExecutor)(req, res);

		expect(res.send).toHaveBeenCalledWith(
			expect.objectContaining({
				name: 'John',
				email: 'test@test.test'
			})
		);
	});

	test("Fetch users list", async () => {
    const req = getMockReq({
			query: {
				[COMMAND_QUERY_PARAM]: GcpFunctionCommand.FETCH_USERS
			},
		});
		const res = getMockRes().res;

    await withDb(commandExecutor)(req, res);

    expect(res.send).toHaveBeenCalledWith([
      expect.objectContaining({
				name: 'John',
				email: 'test@test.test'
			})
    ]);
	});
});
