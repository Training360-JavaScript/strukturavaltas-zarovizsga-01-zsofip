import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  construction$: Observable<Construction[]> = this.constructionService.getAll();
  construction: Construction = new Construction();


  constructor(
    private constructionService: ConstructionService,
  ) { }

  onDelete(): void {
    this.constructionService.delete(this.construction);
  }

}
