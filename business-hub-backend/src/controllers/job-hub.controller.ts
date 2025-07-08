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
import {Jobhub} from '../models';
import {JobhubRepository} from '../repositories';

export class JobHubController {
  constructor(
    @repository(JobhubRepository)
    public jobhubRepository : JobhubRepository,
  ) {}

  @post('/jobhub')
  @response(200, {
    description: 'Jobhub model instance',
    content: {'application/json': {schema: getModelSchemaRef(Jobhub)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jobhub, {
            title: 'NewJobhub',
            
          }),
        },
      },
    })
    jobhub: Jobhub,
  ): Promise<Jobhub> {
    return this.jobhubRepository.create(jobhub);
  }

  @get('/jobhub/count')
  @response(200, {
    description: 'Jobhub model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Jobhub) where?: Where<Jobhub>,
  ): Promise<Count> {
    return this.jobhubRepository.count(where);
  }

  @get('/jobhub')
  @response(200, {
    description: 'Array of Jobhub model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Jobhub, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Jobhub) filter?: Filter<Jobhub>,
  ): Promise<Jobhub[]> {
    return this.jobhubRepository.find(filter);
  }

  @patch('/jobhub')
  @response(200, {
    description: 'Jobhub PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jobhub, {partial: true}),
        },
      },
    })
    jobhub: Jobhub,
    @param.where(Jobhub) where?: Where<Jobhub>,
  ): Promise<Count> {
    return this.jobhubRepository.updateAll(jobhub, where);
  }

  @get('/jobhub/{id}')
  @response(200, {
    description: 'Jobhub model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Jobhub, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Jobhub, {exclude: 'where'}) filter?: FilterExcludingWhere<Jobhub>
  ): Promise<Jobhub> {
    return this.jobhubRepository.findById(id, filter);
  }

  @patch('/jobhub/{id}')
  @response(204, {
    description: 'Jobhub PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jobhub, {partial: true}),
        },
      },
    })
    jobhub: Jobhub,
  ): Promise<void> {
    await this.jobhubRepository.updateById(id, jobhub);
  }

  @put('/jobhub/{id}')
  @response(204, {
    description: 'Jobhub PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() jobhub: Jobhub,
  ): Promise<void> {
    await this.jobhubRepository.replaceById(id, jobhub);
  }

  @del('/jobhub/{id}')
  @response(204, {
    description: 'Jobhub DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.jobhubRepository.deleteById(id);
  }
}
