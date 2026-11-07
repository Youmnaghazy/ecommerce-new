import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { register } from 'swiper/element/bundle';

@Component({
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App  implements OnInit {
  protected readonly title = signal('e-commerce');
  ngOnInit(): void {
      register();

  }
}
