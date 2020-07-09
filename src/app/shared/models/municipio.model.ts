import { Buscavel } from './buscavel.model';

export class Municipio extends Buscavel{
    cd_municipio: string;
    no_municipio: string;

    constructor (cd_municipio?, no_municipio?) {
        super (cd_municipio, no_municipio);
        this.cd_municipio = cd_municipio;
        this.no_municipio = no_municipio;
    }

}

