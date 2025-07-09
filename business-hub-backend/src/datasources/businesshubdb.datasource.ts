import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'businesshubdb',
  connector: 'mysql',
  host: '64.226.97.116',
  port: 3306,
  user: 'Admin',
  password: 'Vit2024#',
  database: 'businesshubdb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BusinesshubdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'businesshubdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.businesshubdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
