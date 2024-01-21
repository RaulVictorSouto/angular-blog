import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataArticles} from '../../data/dataArticles';
import { RouterModule } from '@angular/router';
import { VerticalCardComponent } from "../../components/vertical-card/vertical-card.component";
@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [RouterModule, VerticalCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentMetaDataAuthor: string = "";
  contentMetaDataDate: string = "";
  contentDescription: string = "";
  private id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataArticles.filter(article => article.id === id)[0];
    if (result) {
      this.id = result.id;
      this.photoCover = result.imageUrl;
      this.contentTitle = result.title.toUpperCase();
      this.contentMetaDataAuthor = result.author;
      this.contentMetaDataDate = result.publishDate;
      this.contentDescription = result.content;
  }
}
}
