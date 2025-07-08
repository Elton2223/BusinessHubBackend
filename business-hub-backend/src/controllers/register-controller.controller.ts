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
import {Register} from '../models';
import {RegisterRepository} from '../repositories';

export class RegisterControllerController {
  constructor(
    @repository(RegisterRepository)
    public registerRepository : RegisterRepository,
  ) {}

  @post('/registers')
  @response(200, {
    description: 'Register model instance',
    content: {'application/json': {schema: getModelSchemaRef(Register)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Register, {
            title: 'NewRegister',
            
          }),
        },
      },
    })
    register: Register,
  ): Promise<Register> {
    return this.registerRepository.create(register);
  }

  @get('/registers/count')
  @response(200, {
    description: 'Register model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Register) where?: Where<Register>,
  ): Promise<Count> {
    return this.registerRepository.count(where);
  }

  @get('/registers')
  @response(200, {
    description: 'Array of Register model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Register, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Register) filter?: Filter<Register>,
  ): Promise<Register[]> {
    return this.registerRepository.find(filter);
  }

  @patch('/registers')
  @response(200, {
    description: 'Register PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Register, {partial: true}),
        },
      },
    })
    register: Register,
    @param.where(Register) where?: Where<Register>,
  ): Promise<Count> {
    return this.registerRepository.updateAll(register, where);
  }

  @get('/registers/{id}')
  @response(200, {
    description: 'Register model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Register, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Register, {exclude: 'where'}) filter?: FilterExcludingWhere<Register>
  ): Promise<Register> {
    return this.registerRepository.findById(id, filter);
  }

  @patch('/registers/{id}')
  @response(204, {
    description: 'Register PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Register, {partial: true}),
        },
      },
    })
    register: Register,
  ): Promise<void> {
    await this.registerRepository.updateById(id, register);
  }

  @put('/registers/{id}')
  @response(204, {
    description: 'Register PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() register: Register,
  ): Promise<void> {
    await this.registerRepository.replaceById(id, register);
  }

  @del('/registers/{id}')
  @response(204, {
    description: 'Register DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.registerRepository.deleteById(id);
  }
}
