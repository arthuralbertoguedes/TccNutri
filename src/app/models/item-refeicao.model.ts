import { Alimento } from '../plano-alimentar/alimento.model';
import { Refeicao } from './refeicao.model';

export class ItemRefeicao{

    public id: number;

    public alimento_id: number;

    public refeicao_id: number;

    public quantidade: string;
}