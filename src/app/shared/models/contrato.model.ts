import { TipoBusca } from './../enum/tipo-busca.enum';
import { Buscavel } from './buscavel.model';
export class Contrato extends Buscavel{
    id_contrato: string
    id_licitacao: string
    cd_municipio: string
    cd_u_gestora: number
    dt_ano: number
    nu_contrato: string
    dt_assinatura: Date
    pr_vigencia: Date
    nu_cpfcnpj: string
    nu_licitacao: string
    tp_licitacao: number
    vl_total_contrato: number
    de_obs: string 
    dt_mes_ano: string      
    registro_cge: string  
    cd_siafi: string       
    dt_recebimento: Date  
    foto: string    
    planilha: string          
    ordem_servico : string
    no_fornecedor : string
    de_ugestora : string

    constructor (id_contrato?, de_obs?) {
        super (id_contrato, de_obs, TipoBusca.Contrato);
        this.id_contrato = id_contrato;
        this.de_obs = de_obs;
    }
}

