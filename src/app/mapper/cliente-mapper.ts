import { ClienteModel } from './../model/cliente-model';
import { ClienteDTO } from 'src/app/dto/cliente-dto';
export class ClienteMapper {

    converterDTOParaModel(dto: ClienteDTO): ClienteModel{ 
        return {
            id: dto.id ? dto.id : 0,
            nome: dto.nomeCompleto ? dto.nomeCompleto.split(' ')[0] : '',
            sobrenome: dto.nomeCompleto ? dto.nomeCompleto.split(' ')[1] : '',
            rg: dto.rg ? dto.rg : '',
            cpf: dto.cpf ? dto.cpf : '',
            telefone: dto.telefone,
            dataCriacao: new Date()
        };
    }

    converterModelParaDTO(model: ClienteModel): ClienteDTO{ 
        return {
            id: model.id,
            nomeCompleto: model.nome + ' ' +  model.sobrenome,
            cpf: model.cpf,
            rg: model.rg,            
            telefone: model.telefone
        };
    }
   
}
