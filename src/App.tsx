import { useMemo, useState } from "react";
import { useCoursesQuery } from "./entities/courses/queries"
import { SideBar } from "./components/SideBar/SideBar";
import { CoursesList } from "./components/CoursesList/CoursesList";

function App() {
  const { data } = useCoursesQuery();
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const filteredData = useMemo(() => filterTag ? data?.filter(el => el.tags.includes(filterTag)) : data, [filterTag, data])

  const themes = useMemo(() => {
    return data && Array.from(new Set([...data.map((el) => el.tags).flat(2)]))
  }, [data])


  return (
    <section className="content-page">
      <div className="page-wrapper">
        <SideBar setTheme={setFilterTag} themes={themes} activeTheme={filterTag} />
        <CoursesList list={filteredData} />
      </div>
    </section>
  )
}

export default App
