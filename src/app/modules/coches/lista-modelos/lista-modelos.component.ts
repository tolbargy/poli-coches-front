import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from '@shared/models/marca';
import { Modelo } from '@shared/models/modelo';
import { MarcasService } from '@shared/services/marcas.service';
import { ModelosService } from '@shared/services/modelos.service';

@Component({
  selector: 'app-lista-modelos',
  templateUrl: './lista-modelos.component.html',
  styleUrls: ['./lista-modelos.component.css']
})
export class ListaModelosComponent implements OnInit {

  public idMarca: number = 0;
  public marca: Marca = new Marca();
  public modelos: Modelo[] = [];

  constructor(
    private route: ActivatedRoute,
    private serviceMarca: MarcasService,
    private serviceModelo: ModelosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idMarca = params['idMarca'];
      this.obtenerMarca();
      this.obtenerModelosPorMarca();
    });
  }

  obtenerMarca() {
    this.serviceMarca.obtenerMarca(this.idMarca).subscribe(res => {
      this.marca = res;
    }, error => {
      console.log(error);
    })
  }

  obtenerModelosPorMarca() {
    this.serviceModelo.listarModelosPorIdMarca(this.idMarca).subscribe(res => {
      this.modelos = res;
    }, error => {
      console.log(error);
    });
  }

}
