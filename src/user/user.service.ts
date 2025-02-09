import User from '../data/db/schemas/user.schema';
import { UserDto } from './dto/user.dto';

export class UserService {
	constructor() {}

	public async upsertUser(user: UserDto): Promise<UserDto> {
		const { email } = user;

    const updatedUser = await User.findOneAndUpdate({ email }, user, { new: true, upsert: true }).exec();

		return updatedUser // strip to dto
	}

  public async fetchUsers(): Promise<UserDto[]> {
    const users = await User.find().exec();

    return users // strip to dto
  }
}
