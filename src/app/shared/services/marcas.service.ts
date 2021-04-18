import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '@shared/models/marca';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

  public listarMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(environment.api);
  }
}
