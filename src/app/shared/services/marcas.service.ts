import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '@shared/models/marca';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private path: string = `${environment.api}/marcas`

  constructor(private http: HttpClient) { }

  public listarMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.path);
  }

  public obtenerMarca(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.path}/${id}`);
  }



}
