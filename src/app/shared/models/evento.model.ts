export class Evento {
    descricao: string
    data: Date
    completo: boolean
    valor: number
    id: string
    
    constructor (descricao, data, valor?, id?){
        this.descricao = descricao;
        this.data = data;
        this.completo = new Date (data) < new Date ();
        this.valor = valor;
        this.id = id;
    }
}

