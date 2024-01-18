import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  standalone: true,
  imports: [],
  templateUrl: './vertical-card.component.html',
  styleUrl: './vertical-card.component.css'
})
export class VerticalCardComponent {
  @Input() title: string = 'Título Padrão';
  @Input() imageUrl: string = 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/Asi-luce-Shinji-Ikari-convertido-en-una-waifu-con-fanart-de-Neon-Genesis-Evangelion-1.jpg';
}
