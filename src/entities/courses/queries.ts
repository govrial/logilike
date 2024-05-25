import { getCourses } from 'shared/api/actions';
import { useQuery } from "@tanstack/react-query";


export const useCoursesQuery = () => useQuery({
  queryKey: ['courses'],
  queryFn: getCourses
})