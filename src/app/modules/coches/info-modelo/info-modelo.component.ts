import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modelo } from '@shared/models/modelo';
import { ModelosService } from '@shared/services/modelos.service';

@Component({
  selector: 'app-info-modelo',
  templateUrl: './info-modelo.component.html',
  styleUrls: ['./info-modelo.component.css']
})
export class InfoModeloComponent implements OnInit {

  public idModelo: number = 0;
  public modelo: Modelo = new Modelo();

  constructor(
    private route: ActivatedRoute,
    private serviceModelo: ModelosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idModelo = params['idModelo'];
      this.obtenerModelo();
    });
  }

  obtenerModelo() {
    this.serviceModelo.obtenerModelo(this.idModelo).subscribe(res => {
      this.modelo = res;
    }, error => {
      console.log(error);
    });
  }

}
