import { Contrato } from './contrato.model';
export class Licitacao {
    id_licitacao: string
    cd_ibge: string
    cd_u_gestora: number
    dt_ano:  number
    nu_licitacao: string
    contratosLicitacao: Contrato[]
    tp_licitacao: string
    dt_homologacao: Date
    nu_propostas: string
    vl_licitacao:  number
    tp_objeto:  number
    de_obs: string
    dt_mes_ano: string
    registro_cge: string
    tp_regime_execucao: string
}

