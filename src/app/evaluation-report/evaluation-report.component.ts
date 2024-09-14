import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CourseDetail } from './components/course-details';
import { AssessmentChart } from './components/assessment-chart';
import { AttendanceChart } from './components/attendance-chart';

@Component({
  selector: 'app-evaluation-report',
  standalone: true,
  imports: [CardModule, CourseDetail, AssessmentChart, AttendanceChart],
  templateUrl: './evaluation-report.component.html',
  styleUrl: './evaluation-report.component.css'
})
export class EvaluationReportComponent implements OnInit {

  totalStudents: number | undefined;
  courseAVGMarks: number | undefined;

  ngOnInit(): void {
    this.totalStudents = 102;
    this.courseAVGMarks = 85;
  }
}
