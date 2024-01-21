import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() title: string = 'Título Padrão';
  @Input() description: string = 'Descrição padrão';
  @Input() imageUrl: string = 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/Asi-luce-Shinji-Ikari-convertido-en-una-waifu-con-fanart-de-Neon-Genesis-Evangelion-1.jpg';
  @Input() id: string = '0';
}
