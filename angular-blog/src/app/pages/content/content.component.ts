import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataArticles} from '../../data/dataArticles';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
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
      this.contentTitle = result.title;
      this.contentMetaDataAuthor = result.author;
      this.contentMetaDataDate = result.publishDate;
      this.contentDescription = result.content;
    }
  }
}
