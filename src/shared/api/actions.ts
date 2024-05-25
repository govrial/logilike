import { createInstance } from "shared/api/api-instance";
import { apiRoutes } from "shared/api/api-routes";
import { type CoursesList, type SecondParameter } from "./actionsDto";


export const getCourses = (options?: SecondParameter<typeof createInstance>) =>
  createInstance<CoursesList>(
    { method: "get", url: apiRoutes.COURSES },
    options
  );