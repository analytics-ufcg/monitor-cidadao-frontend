export class Previsao {
    id_previsao_prod: string;
    id_contrato: string;
    id_experimento: string;
    risco: number;
    timestamp: Date

    constructor (id_previsao_prod, id_contrato, id_experimento, risco, timestamp) {
        this.id_previsao_prod = id_previsao_prod;
        this.id_contrato = id_contrato;
        this.id_experimento = id_experimento;
        this.risco = risco;
        this.timestamp = timestamp
    }
}

