import { NgFor } from '@angular/common';
import { CourseDetails } from '../../../interfaces/evaluationreport';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { EvaluationreportService } from '../../evaluationreport.service';

@Component({
    selector: 'app-course-details',
    standalone: true,
    imports: [CardModule, DividerModule, NgFor, TagModule],
    template: `
    <p-card [style]="{'flex': '1 1 0%'}">
                <div style="display: flex; flex-direction: column;">
                    <div class="course-details-title">Course Code</div>
                    <div class="course-details-subtitle">{{courseDetails?.courseCode}}</div>
                </div>

                <p-divider />

                <div style="display: flex; flex-direction: column;">
                    <div class="course-details-title">Course Name</div>
                    <div class="course-details-subtitle">{{courseDetails?.courseName}}</div>
                </div>

                <p-divider />

                <div style="display: flex; flex-direction: column;">
                    <div class="course-details-title">Course Type</div>
                    <div class="course-details-subtitle">{{courseDetails?.courseType}}</div>
                </div>

                <p-divider />

                <div style="display: flex; flex-direction: column;">
                    <div class="course-details-title">Course Period</div>
                    <div class="course-details-subtitle">{{courseDetails?.coursePeriod}}</div>
                </div>

                <p-divider />

                <div style="display: flex; flex-direction: column;">
                    <div class="course-details-title">Credit ( {{creditCount()}} )</div>
                    <div class="course-details-subtitle" *ngFor="let item of courseDetails?.courseCredits">
                        {{item.type}} - <span style="font-weight: 600;">{{item.value}}</span>
                    </div>
                </div>

                <p-divider />

                <div style="display: flex; flex-direction: column;">
                    <div class="course-details-title">Course Outcomes (COs)</div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap">
                        <p-tag value={{item}}
                            [style]="{background: 'rgba(167, 200, 143, 1)', color: 'rgba(44, 56, 75, 1)'}"
                            *ngFor="let item of courseDetails?.courseOutcomes" />
                    </div>
                </div>

                <p-divider />

                <div style="display: flex; flex-direction: column;">
                    <div class="course-details-title">Mapped to this Course</div>
                    <div style="display: flex; gap: 8px;">
                        <p-tag value={{item}}
                            [style]="{background: 'rgba(46, 105, 149, 1)', color: 'rgba(255, 255, 255, 1)'}"
                            *ngFor="let item of courseDetails?.courseTag" />
                    </div>
                </div>

            </p-card>
    `,
    styleUrl: '../evaluation-report.component.css'
})
export class CourseDetail implements OnInit {
    courseDetails: CourseDetails | undefined;

    constructor(private evaluationreportService: EvaluationreportService) { }

    ngOnInit(): void {
        this.courseDetails = this.evaluationreportService.getCourseDetails()
    }

    creditCount() {
        return this.courseDetails?.courseCredits.length || 0
    }
}