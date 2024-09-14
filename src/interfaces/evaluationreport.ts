export interface CourseDetails {
    courseId: number
    courseCode: string
    courseName: string
    courseType: string
    coursePeriod: string
    courseCredits: credit[]
    courseOutcomes: string[]
    courseTag: string[]
}

export interface credit {
    type: string
    value: number
}