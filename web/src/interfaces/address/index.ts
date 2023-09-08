export interface IAddressRequest {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  number: number;
  user_id?: string;
}
export interface IAddress extends IAddressRequest {
  id: string;
}

export interface IAddressUpdate {
  id: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  number?: number;
  user_id?: string;
 
}
