import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationreportService {

  constructor() { }

  getCourseDetails() {
    return {
      courseId: 1,
      courseCode: "BA3102",
      courseName: "Quantitative Techniques",
      courseType: "Program Elective",
      coursePeriod: "Semester - I",
      courseCredits: [
        { type: "Lecture", value: 3 },
        { type: "Tutorial", value: 0 },
        { type: "Practical", value: 1 },
        { type: "Project", value: 0 },
      ],
      courseOutcomes: ["CO2", "CO4", "CO5", "CO7", "CO13", "CO14"],
      courseTag: ["PO7", "PO10", "PO12", "PO8"]
    }
  }

  getAssessmentChartData() {
    return {
      labels: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],  // Subjects
      datasets: [
        {
          label: 'Pending',
          backgroundColor: '#d3d3d3',  // Gray color for Pending
          data: [20, 30, 40, 10, 20]    // Pending data for each subject for Task 1
        },
        {
          label: 'Completed',
          backgroundColor: '#6ba82a',  // Green color for Completed
          data: [80, 70, 60, 90, 80]    // Completed data for each subject for Task 1
        },
        {
          label: 'Pending',
          backgroundColor: '#d3d3d3',  // Gray color for Pending
          data: [30, 40, 20, 30, 50]    // Pending data for each subject for Task 2
        },
        {
          label: 'Completed',
          backgroundColor: '#6ba82a',  // Green color for Completed
          data: [70, 60, 80, 70, 50]    // Completed data for each subject for Task 2
        }
        // Add more datasets for more tasks if needed
      ]
    };
  }

  getAttendanceChartData() {
    return {
      labels: ['1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '2/9', '9/9', '16/9', '23/9', '30/9', '14/10'],
      datasets: [
        {
          label: 'First Dataset',
          data: [40, 80, 30, 90, 60, 75, 95, 50, 85, 100, 65, 50, 70, 60],
          fill: false,
          borderColor: "#9F40CE",
          // tension: 0.4,
          lineTension: 0,
          pointRadius: 5,
          pointBackgroundColor: '#333'
        }
      ]
    };
  }
}
