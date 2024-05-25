export type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any
  ? P
  : never;

export interface Course {
  name: string
  id: string
  image: string
  bgColor: string
  tags: string[]
}

export type CoursesList = Course[]


