import {Entity, model, property} from '@loopback/repository';

@model()
export class Postjob extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentType: string;

  @property({
    type: 'number',
    required: true,
  })
  paymentAmount: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  requirements?: string;

  @property({
    type: 'number',
  })
  jobStatus?: number;

  @property({
    type: 'string',
  })
  registerId?: string;

  constructor(data?: Partial<Postjob>) {
    super(data);
  }
}

export interface PostjobRelations {
  // describe navigational properties here
}

export type PostjobWithRelations = Postjob & PostjobRelations;
