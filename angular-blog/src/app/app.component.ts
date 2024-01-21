import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ContentComponent } from './pages/content/content.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, ContentComponent, MenuBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Neon Genesis Evangelion';
}
