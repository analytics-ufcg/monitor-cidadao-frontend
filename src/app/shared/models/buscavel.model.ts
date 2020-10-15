import { TipoBusca } from './../enum/tipo-busca.enum';

export class Buscavel {
    id: string;
    descricao: string;
    tipoBusca: TipoBusca;
    uf: string;

    constructor(id?, descricao?, tipoBusca?, uf?){
        this.id = id;
        this.descricao = descricao;
        this.tipoBusca = tipoBusca;
        this.uf = uf;
    }
}

