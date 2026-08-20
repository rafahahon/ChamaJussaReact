// quais atributos vao aparecer no card
// LISTAGEM DE OS - para os cards E tambem para tela de detalhesOs
export interface OrdemServico {
    osId: number, // importante para redirecionar para detalhesOs
    nomeItem: string,
    solicitanteNome: string,
    dtCriacao: string,
    localizacaoNome: string,
    descricao: string,
    imagemUrl?: string,
    statusNome: string, 
    filaNome: string
}

//     "osId": 0,
//     "nomeItem": "string",
//     "solicitante": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "solicitanteNome": "string",
//     "dtCriacao": "2026-08-19T11:22:11.961Z",
//     "localizacaoId": 0,
//     "localizacaoNome": "string",
//     "descricao": "string",
//     "statusId": 0,
//     "statusNome": "string",
//     "filaId": 0,
//     "filaNome": "string",
//     "imagemUrl": "string"