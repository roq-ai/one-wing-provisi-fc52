import { RequirementInterface } from 'interfaces/requirement';
import { GetQueryInterface } from 'interfaces';

export interface IterationInterface {
  id?: string;
  title: string;
  description?: string;
  requirement_id: string;
  created_at?: any;
  updated_at?: any;

  requirement?: RequirementInterface;
  _count?: {};
}

export interface IterationGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  requirement_id?: string;
}
