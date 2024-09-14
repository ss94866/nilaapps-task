import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { EvaluationreportService } from '../../evaluationreport.service';

@Component({
    selector: 'app-assessment-chart',
    template: `
        <div class="custom-legend">
            <span class="legend-item">
                <span class="legend-box" style="background-color: #d3d3d3;"></span>
                Pending
            </span>
            <span class="legend-item">
                <span class="legend-box" style="background-color: #6ba82a;"></span>
                Completed
            </span>
        </div>
        <p-chart type="bar" [data]="data" [options]="options" [style]="{'height': '230px'}" />    
    `,
    standalone: true,
    imports: [ChartModule],
    styleUrl: '../evaluation-report.component.css'
})
export class AssessmentChart implements OnInit {
    data: any;
    options: any;

    constructor(private evaluationreportService: EvaluationreportService) { }
    ngOnInit(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.data = this.evaluationreportService.getAssessmentChartData()

        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                x: {
                    stacked: false, // Set to false for multiple bars per subject
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: false, // Set to false to unstack the bars
                    ticks: {
                        beginAtZero: true,
                        max: 100  // Assuming it's percentage-based
                    }
                }
            }
        };
    }
}