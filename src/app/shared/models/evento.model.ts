export class Evento {
    descricao: string
    data: Date
    completo: boolean
    id: string
    
    constructor (descricao, data, id?){
        this.descricao = descricao;
        this.data = data;
        this.completo = new Date (data) < new Date ();
        this.id = id;
    }
}

