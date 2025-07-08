import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Register extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  surname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  profile_photo?: string;

  @property({
    type: 'number',
  })
  ratings?: number;

  @property({
    type: 'number',
  })
  contacts?: number;

  @property({
    type: 'number',
  })
  latitude?: number;

  @property({
    type: 'number',
  })
  longitude?: number;

  @property({
    type: 'string',
  })
  identification_doc?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Register>) {
    super(data);
  }
}

export interface RegisterRelations {
  // describe navigational properties here
}

export type RegisterWithRelations = Register & RegisterRelations;
