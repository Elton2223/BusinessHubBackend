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
import {Postjob} from '../models';
import {PostjobRepository} from '../repositories';

export class PostjobControllerController {
  constructor(
    @repository(PostjobRepository)
    public postjobRepository : PostjobRepository,
  ) {}

  @post('/postjobs')
  @response(200, {
    description: 'Postjob model instance',
    content: {'application/json': {schema: getModelSchemaRef(Postjob)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Postjob, {
            title: 'NewPostjob',
            
          }),
        },
      },
    })
    postjob: Postjob,
  ): Promise<Postjob> {
    return this.postjobRepository.create(postjob);
  }

  @get('/postjobs/count')
  @response(200, {
    description: 'Postjob model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Postjob) where?: Where<Postjob>,
  ): Promise<Count> {
    return this.postjobRepository.count(where);
  }

  @get('/postjobs')
  @response(200, {
    description: 'Array of Postjob model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Postjob, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Postjob) filter?: Filter<Postjob>,
  ): Promise<Postjob[]> {
    return this.postjobRepository.find(filter);
  }

  @patch('/postjobs')
  @response(200, {
    description: 'Postjob PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Postjob, {partial: true}),
        },
      },
    })
    postjob: Postjob,
    @param.where(Postjob) where?: Where<Postjob>,
  ): Promise<Count> {
    return this.postjobRepository.updateAll(postjob, where);
  }

  @get('/postjobs/{id}')
  @response(200, {
    description: 'Postjob model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Postjob, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Postjob, {exclude: 'where'}) filter?: FilterExcludingWhere<Postjob>
  ): Promise<Postjob> {
    return this.postjobRepository.findById(id, filter);
  }

  @patch('/postjobs/{id}')
  @response(204, {
    description: 'Postjob PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Postjob, {partial: true}),
        },
      },
    })
    postjob: Postjob,
  ): Promise<void> {
    await this.postjobRepository.updateById(id, postjob);
  }

  @put('/postjobs/{id}')
  @response(204, {
    description: 'Postjob PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() postjob: Postjob,
  ): Promise<void> {
    await this.postjobRepository.replaceById(id, postjob);
  }

  @del('/postjobs/{id}')
  @response(204, {
    description: 'Postjob DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.postjobRepository.deleteById(id);
  }
}
