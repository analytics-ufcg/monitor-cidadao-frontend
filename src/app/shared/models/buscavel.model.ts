import { TipoBusca } from './../enum/tipo-busca.enum';

export class Buscavel {
    id: string
    descricao: string
    descricaoCurta: string
    tipoBusca: TipoBusca
    
    constructor (id?, descricao?, tipoBusca?){
        this.id = id;
        this.descricao = descricao;
        this.tipoBusca = tipoBusca;
        this.descricaoCurta = this.descricao?.length > 55 ? descricao.substring(0, 55)+"..." : this.descricao;
    }
}

