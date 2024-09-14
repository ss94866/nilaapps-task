import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { EvaluationreportService } from '../../evaluationreport.service';

@Component({
    selector: 'app-attendance-chart',
    template: `
        <p-chart type="line" [data]="data" [options]="options" />
    `,
    standalone: true,
    imports: [ChartModule],
    styleUrl: '../evaluation-report.component.css'
})
export class AttendanceChart implements OnInit {
    data: any;
    options: any;

    constructor(private evaluationreportService: EvaluationreportService) { }
    ngOnInit(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.data = this.evaluationreportService.getAttendanceChartData()

        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Weeks'
                    },
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Attendance (%)'
                    },
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false,
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}