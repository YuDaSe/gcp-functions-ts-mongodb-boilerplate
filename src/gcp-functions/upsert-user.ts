import { HttpFunction } from "@google-cloud/functions-framework";
import { Request, Response } from 'express'
import { UserDto } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";

const upsertUser: HttpFunction = async (req: Request, res: Response) => {
  const user = req.body as UserDto;
  const userService = new UserService();

  const updatedUser = await userService.upsertUser(user);

  res.send(updatedUser);
};

export default upsertUser;