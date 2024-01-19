import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { VerticalCardComponent } from "../../components/vertical-card/vertical-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home_responsive.css'],
    imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, VerticalCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
