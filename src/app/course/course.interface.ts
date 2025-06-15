export interface CourseInterface {
    id: string;
    name: string;
    description: string;
    cover: string;
    enrollmentsCount: number;
    startDate?: Date;
    isEnrolled: boolean;
    userEnrollments: any
    enrollmentCancelled: boolean;
}