import { Component } from '@angular/core';
import { EvaluationReportComponent } from '../evaluation-report/evaluation-report.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [EvaluationReportComponent, CardModule, AccordionModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent{

}
