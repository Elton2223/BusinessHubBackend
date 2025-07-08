import {Entity, model, property} from '@loopback/repository';

@model()
export class Jobhub extends Entity {
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
  street_address: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  postal_code: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  latitude: string;

  @property({
    type: 'string',
    required: true,
  })
  longitude: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'number',
    required: true,
  })
  paymentType: number;

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
    type: 'number',
    required: true,
  })
  registerId?: number;

  @property({
    type: 'date',
    mysql : {
      columnName: 'dateCreated',
      dataType: 'datetime',
      nullable: 'Y',
      default: () => 'CURRENT_TIMESTAMP',
    }
  })
  dateCreated?: Date;

  @property({
    type: 'date',
    required: true,
  })
  dateAccepted?: Date;

  @property({
    type: 'date',
    required: true,
  })
  dateFinished?: Date;

  @property({
    type: 'string',
  })
  review: string;

  @property({
    type: 'number',
  })
  reviewRating: number;

  constructor(data?: Partial<Jobhub>) {
    super(data);
  }
}

export interface JobhubRelations {
  // describe navigational properties here
}

export type JobhubWithRelations = Jobhub & JobhubRelations;
