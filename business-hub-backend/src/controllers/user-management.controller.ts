import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {UserManagement} from '../models';
import {UserManagementRepository} from '../repositories';

export class UserManagementController {
  constructor(
    @repository(UserManagementRepository)
    public userManagementRepository : UserManagementRepository,
  ) {}

  @post('/user-management')
  @response(200, {
    description: 'UserManagement model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserManagement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserManagement, {
            title: 'NewUserManagement',
            
          }),
        },
      },
    })
    userManagement: UserManagement,
  ): Promise<UserManagement> {
    return this.userManagementRepository.create(userManagement);
  }

  @get('/user-management/count')
  @response(200, {
    description: 'UserManagement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserManagement) where?: Where<UserManagement>,
  ): Promise<Count> {
    return this.userManagementRepository.count(where);
  }

  @get('/user-management')
  @response(200, {
    description: 'Array of UserManagement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserManagement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserManagement) filter?: Filter<UserManagement>,
  ): Promise<UserManagement[]> {
    return this.userManagementRepository.find(filter);
  }

  @patch('/user-management')
  @response(200, {
    description: 'UserManagement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserManagement, {partial: true}),
        },
      },
    })
    userManagement: UserManagement,
    @param.where(UserManagement) where?: Where<UserManagement>,
  ): Promise<Count> {
    return this.userManagementRepository.updateAll(userManagement, where);
  }

  @get('/user-management/{id}')
  @response(200, {
    description: 'UserManagement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserManagement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UserManagement, {exclude: 'where'}) filter?: FilterExcludingWhere<UserManagement>
  ): Promise<UserManagement> {
    return this.userManagementRepository.findById(id, filter);
  }

  @patch('/user-management/{id}')
  @response(204, {
    description: 'UserManagement PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserManagement, {partial: true}),
        },
      },
    })
    userManagement: UserManagement,
  ): Promise<void> {
    await this.userManagementRepository.updateById(id, userManagement);
  }

  @put('/user-management/{id}')
  @response(204, {
    description: 'UserManagement PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userManagement: UserManagement,
  ): Promise<void> {
    await this.userManagementRepository.replaceById(id, userManagement);
  }

  @del('/user-management/{id}')
  @response(204, {
    description: 'UserManagement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userManagementRepository.deleteById(id);
  }
}
