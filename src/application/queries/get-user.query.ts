/* eslint-disable prettier/prettier */
import { IQuery } from '@nestjs/cqrs';

export class GetUserQuery implements IQuery {
  constructor(public readonly userId: string) {}
}
