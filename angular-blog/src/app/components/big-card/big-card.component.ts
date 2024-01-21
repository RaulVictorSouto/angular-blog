import { Component, Input, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  @Input() title: string = 'Título Padrão';
  @Input() description: string = 'Descrição';
  @Input() imageUrl: string = 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/Asi-luce-Shinji-Ikari-convertido-en-una-waifu-con-fanart-de-Neon-Genesis-Evangelion-1.jpg';
  @Input() id: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
