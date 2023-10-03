import { IterationInterface } from 'interfaces/iteration';
import { QuestionnaireInterface } from 'interfaces/questionnaire';
import { GetQueryInterface } from 'interfaces';

export interface RequirementInterface {
  id?: string;
  title: string;
  description?: string;
  questionnaire_id: string;
  created_at?: any;
  updated_at?: any;
  iteration?: IterationInterface[];
  questionnaire?: QuestionnaireInterface;
  _count?: {
    iteration?: number;
  };
}

export interface RequirementGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  questionnaire_id?: string;
}
