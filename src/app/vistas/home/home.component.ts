import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CarrouselComponent } from '../../shared/carrousel/carrousel.component';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, CarrouselComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
