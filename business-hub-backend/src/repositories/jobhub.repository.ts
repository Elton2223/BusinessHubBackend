import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BusinesshubdbDataSource} from '../datasources';
import {Jobhub, JobhubRelations} from '../models';

export class JobhubRepository extends DefaultCrudRepository<
  Jobhub,
  typeof Jobhub.prototype.id,
  JobhubRelations
> {
  constructor(
    @inject('datasources.businesshubdb') dataSource: BusinesshubdbDataSource,
  ) {
    super(Jobhub, dataSource);
  }
}
