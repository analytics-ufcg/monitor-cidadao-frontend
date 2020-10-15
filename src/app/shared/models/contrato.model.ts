import { Pagamento } from './pagamento.model';
import { TipoBusca } from './../enum/tipo-busca.enum';
import { Buscavel } from './buscavel.model';
import { Previsao } from './previsao.model';
export class Contrato{
    id_contrato: string;
    id_licitacao: string;
    cd_ibge: string;
    uf: string;
    mesorregiao_geografica: string;
    microrregiao_geografica: string;
    cd_u_gestora: number;
    dt_ano: number;
    nu_contrato: string;
    dt_assinatura: Date;
    pr_vigencia: Date;
    nu_cpfcnpj: string;
    nu_licitacao: string;
    tp_licitacao: number;
    vl_total_contrato: number;
    de_obs: string;
    dt_mes_ano: string;
    registro_cge: string;
    cd_siafi: string;
    dt_recebimento: Date;
    foto: string;
    planilha: string;
    ordem_servico : string;
    no_fornecedor : string;
    de_ugestora : string;
    previsao: Previsao;
    totalPago: number;
    pagamentosContrato: Pagamento[];
}

