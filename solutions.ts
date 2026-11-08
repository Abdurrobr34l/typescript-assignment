const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    }
  }
  return "Inactive";
};

const formatCoordinate = (data: readonly [number, number, string]): string => {
  return `Location: ${data[2]} (${data[0]}, ${data[1]})`;
};

const concatenateArrays = <T>(...arr: T[][]): T[] => {
  let newArr = [...arr].flat();
  return newArr;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
const getPopularCourses = (courses: Course[], minStudents: number) => {
  return courses.filter((course) => {
    let findCourse = course.isPublished === true;
    let findStudent = course.students >= minStudents;

    return findCourse && findStudent;
  });
};
