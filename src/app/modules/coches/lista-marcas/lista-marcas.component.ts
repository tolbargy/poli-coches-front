import { Component, OnInit } from '@angular/core';
import { Marca } from '@shared/models/marca';
import { MarcasService } from '@shared/services/marcas.service';

@Component({
  selector: 'app-lista-marcas',
  templateUrl: './lista-marcas.component.html',
  styleUrls: ['./lista-marcas.component.css']
})
export class ListaMarcasComponent implements OnInit {

  public marcas: Marca[] = [];


  constructor(private marcasService: MarcasService) { }

  ngOnInit(): void {
    this.listarMarcas();
  }

  private listarMarcas() {
    this.marcasService.listarMarcas().subscribe(res => {
      this.marcas = res;
    }, error => {
      console.log(error);
    });
  }

}
