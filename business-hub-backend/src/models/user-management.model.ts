import {Entity, model, property} from '@loopback/repository';

@model()
export class UserManagement extends Entity {
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
  phone_number?: number;

  @property({
    type: 'string',
  })
  street_address?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  postal_code?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  identification_doc?: string;

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
    required: true,
  })
  password: string;


  constructor(data?: Partial<UserManagement>) {
    super(data);
  }
}

export interface UserManagementRelations {
  // describe navigational properties here
}

export type UserManagementWithRelations = UserManagement & UserManagementRelations;
