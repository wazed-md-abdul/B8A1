interface Course {
    title : string , 
    students  : number ,
    isPublished : boolean ,
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

function getPopularCourses(courses: Course[] , minStudents: number): Course[] {
    return courses.filter(course => course.isPublished && course.students > minStudents);

}

console.log( getPopularCourses(courses, 80)); 