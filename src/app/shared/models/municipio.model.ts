import { TipoBusca } from './../enum/tipo-busca.enum';
import { Buscavel } from './buscavel.model';

export class Municipio extends Buscavel{
    cd_municipio: string;
    no_municipio: string;

    constructor (cd_municipio?, no_municipio?) {
        super (cd_municipio, no_municipio, TipoBusca.Municipio);
        this.cd_municipio = cd_municipio;
        this.no_municipio = no_municipio;
    }

}

