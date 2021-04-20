import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelo } from '@shared/models/modelo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  private path: string = `${environment.api}/modelos`
  private pathMarcas: string = `${environment.api}/marcas`

  constructor(private http: HttpClient) { }

  public listarModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.path);
  }

  public obtenerModelo(id: number): Observable<Modelo> {
    return this.http.get<Modelo>(`${this.path}/${id}`);
  }

  public listarModelosPorIdMarca(idMarca: number): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(`${this.pathMarcas}/${idMarca}/modelos`);
  }
}
