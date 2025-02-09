import { HttpFunction } from "@google-cloud/functions-framework";
import { Request, Response } from 'express'
import GcpFunctionCommand from "./enums/gcp-function-command.enum";
import fetchUsers from "./fetch-users";
import upsertUser from "./upsert-user";
import { COMMAND_QUERY_PARAM } from "./constants";

const commandFunctionMap = {
  [GcpFunctionCommand.UPSERT_USER]: upsertUser,
  [GcpFunctionCommand.FETCH_USERS]: fetchUsers,
}

const commandExecutor: HttpFunction = (
  req: Request,
  res: Response
): HttpFunction => {
  const command = req.query[COMMAND_QUERY_PARAM] as GcpFunctionCommand
  const commandFunction = commandFunctionMap[command] || (() => res.send('Command not found'));

  return commandFunction(req, res)
}

export default commandExecutor;