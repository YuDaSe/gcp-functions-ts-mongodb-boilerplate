import { HttpFunction } from "@google-cloud/functions-framework";
import { Request, Response } from 'express'
import { UserService } from "../user/user.service";

const fetchUsers: HttpFunction = async (req: Request, res: Response) => {
  const userService = new UserService();

  const allUsers = await userService.fetchUsers();

  res.send(allUsers);
};

export default fetchUsers;