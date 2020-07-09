import { TipoBusca } from './../enum/tipo-busca.enum';

export class Buscavel {
    id: string
    descricao: string
    tipoBusca: TipoBusca
    
    constructor (id?, descricao?){
        this.id = id;
        this.descricao = descricao;
        this.tipoBusca = TipoBusca.Municipio
    }
}

