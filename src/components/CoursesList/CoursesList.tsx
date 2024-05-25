import { type CoursesList as CoursesListType } from "@/shared/api/actionsDto"
import s from './CoursesList.module.scss';

interface CoursesListProps {
  list: CoursesListType | undefined
}

export const CoursesList = ({ list }: CoursesListProps) => {

  if (!list) return null;

  return (
    <ul className={s.root}>
      {
        list?.map((el) => (
          <li className={s.item} key={el.id}>
            <div className={s.item__image} style={{ backgroundColor: el.bgColor }}>
              <img src={el.image} alt={el.name} />
            </div>
            <div className={s.item__title}>
              <h2>{el.name}</h2>
            </div>
          </li>
        ))
      }
    </ul>
  )
}