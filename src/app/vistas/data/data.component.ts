import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { HttpClientModule } from '@angular/common/http';
import { Galaxy } from '../../interface/galaxy';
import { Arrays } from '../../interface/arrays';


@Component({
  selector: 'app-data',
  imports: [RouterOutlet, HttpClientModule],
  providers: [ElementService],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  constructor(
    private elementService: ElementService,
    private cdr: ChangeDetectorRef
  ){}
  elements: Arrays[] = [];
  ngOnInit(): void {
    this.elementService.obtenerDatos().subscribe(respuesta => {
      // console.log('Respuesta de la API: ', respuesta);
      const data = respuesta as any;
      // console.log('const data: ', data);
      this.elements = data.collection.items || [];
      console.log('items: ', this.elements[0] || []);
      this.cdr.detectChanges();

    });
  }
}
