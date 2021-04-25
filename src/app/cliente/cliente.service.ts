import { ClienteDTO } from './../dto/cliente-dto';
import { Observable } from 'rxjs';
import { ClienteModel } from './../model/cliente-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class ClienteService {

    url: string = environment.URLSERVIDOR;

    constructor(private http: HttpClient) { }
  
    buscar(): Observable<ClienteModel[]>{
      return this.http.get(this.url+'cliente')
            .pipe( map(resposta => <ClienteModel[]> resposta) );
    }

    salvar(cliente: ClienteDTO): Observable<ClienteModel>{
      return this.http.post(this.url+'cliente', cliente)
            .pipe( map(resposta => <ClienteModel> resposta) );
    }

    atualizar(cliente: ClienteDTO){
      return this.http.put(this.url+'cliente/'+cliente.id, cliente)
      .pipe( map(resposta => <ClienteModel> resposta) );
    }
}
