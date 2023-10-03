import { RequirementInterface } from 'interfaces/requirement';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QuestionnaireInterface {
  id?: string;
  title: string;
  description?: string;
  deadline?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  requirement?: RequirementInterface[];
  user?: UserInterface;
  _count?: {
    requirement?: number;
  };
}

export interface QuestionnaireGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  user_id?: string;
}
