import { ClienteMapper } from './../../mapper/cliente-mapper';
import { ClienteDTO } from 'src/app/dto/cliente-dto';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/model/cliente-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  clientes: ClienteModel[] = [];
  cliente: ClienteDTO = {};
  mapper = new ClienteMapper();

  operacao: Boolean = true;

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){ //não é necessário ter o mesmo nome do método do service
    this.service.buscar().subscribe(resposta => {
      this.clientes = resposta;
    });     
  }

  adicionar(){
    this.service.salvar(this.cliente).subscribe( resposta => {
      console.log(resposta);
      this.consultar();
      this.cliente = {};
    });
  }

  editar(dado: ClienteModel){
    this.cliente = this.mapper.converterModelParaDTO(dado)
    this.operacao = false;
  }
  
  atualizar(){
    this.service.atualizar(this.cliente).subscribe( () => {
      this.cliente = {};
      this.operacao = true;
      this.consultar();
    })
  }
}
