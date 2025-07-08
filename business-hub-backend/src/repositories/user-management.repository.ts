import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BusinesshubdbDataSource} from '../datasources';
import {UserManagement, UserManagementRelations} from '../models';

export class UserManagementRepository extends DefaultCrudRepository<
  UserManagement,
  typeof UserManagement.prototype.id,
  UserManagementRelations
> {
  constructor(
    @inject('datasources.businesshubdb') dataSource: BusinesshubdbDataSource,
  ) {
    super(UserManagement, dataSource);
  }
}
