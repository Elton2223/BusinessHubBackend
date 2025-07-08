import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BusinesshubdbDataSource} from '../datasources';
import {Register, RegisterRelations} from '../models';

export class RegisterRepository extends DefaultCrudRepository<
  Register,
  typeof Register.prototype.id,
  RegisterRelations
> {
  constructor(
    @inject('datasources.businesshubdb') dataSource: BusinesshubdbDataSource,
  ) {
    super(Register, dataSource);
  }
}
