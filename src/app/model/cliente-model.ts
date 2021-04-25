export interface ClienteModel {
    id: number,
    nome: string,
    sobrenome: string,
    rg: string,
    cpf: string,
    telefone?: string,
    dataCriacao: Date
}
