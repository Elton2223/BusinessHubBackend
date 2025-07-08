import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BusinesshubdbDataSource} from '../datasources';
import {Postjob, PostjobRelations} from '../models';

export class PostjobRepository extends DefaultCrudRepository<
  Postjob,
  typeof Postjob.prototype.id,
  PostjobRelations
> {
  constructor(
    @inject('datasources.businesshubdb') dataSource: BusinesshubdbDataSource,
  ) {
    super(Postjob, dataSource);
  }
}
