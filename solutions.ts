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
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter((course) => {
    let findCourse = course.isPublished === true;
    let findStudent = course.students >= minStudents;

    return findCourse && findStudent;
  });
};


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => {
    return item[key];
  });
};


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}
class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}