import { TipoBusca } from './../enum/tipo-busca.enum';
import { Buscavel } from './buscavel.model';

export class Municipio {
    cd_ibge: string;
    nome_municipio: string;

    constructor (cd_ibge?, nome_municipio?) {
        this.cd_ibge = cd_ibge;
        this.nome_municipio = nome_municipio;
    }

}

