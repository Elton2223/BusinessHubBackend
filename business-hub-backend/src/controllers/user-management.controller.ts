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

  @post('/user-management/login')
  @response(200, {
    description: 'User login',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            success: {type: 'boolean'},
            message: {type: 'string'},
            user: {type: 'object'},
          },
        },
      },
    },
  })
  async login(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: {type: 'string'},
              password: {type: 'string'},
            },
          },
        },
      },
    })
    credentials: {email: string; password: string},
  ): Promise<{success: boolean; message: string; user?: any}> {
    try {
      // Find user by email
      const users = await this.userManagementRepository.find({
        where: {email: credentials.email},
      });

      if (users.length === 0) {
        return {
          success: false,
          message: 'User not found',
        };
      }

      const user = users[0];

      // Check password
      if (user.password !== credentials.password) {
        return {
          success: false,
          message: 'Invalid password',
        };
      }

      // Return user data (excluding password for security)
      const {password, ...userWithoutPassword} = user;
      
      return {
        success: true,
        message: 'Login successful',
        user: userWithoutPassword,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Login failed',
      };
    }
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
