import { TipoBusca } from './../enum/tipo-busca.enum';

export class Buscavel {
    id: string
    descricao: string
    tipoBusca: TipoBusca
    
    constructor (id?, descricao?, tipoBusca?){
        this.id = id;
        this.descricao = descricao;
        this.tipoBusca = tipoBusca;
    }
}

