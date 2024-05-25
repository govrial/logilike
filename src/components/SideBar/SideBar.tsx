import Button from "@/shared/ui/Button/Button"
import { Dispatch, FC, SetStateAction, useMemo } from "react";
import s from './SideBar.module.scss';


interface SideBarProps {
  themes: Array<string> | undefined,
  setTheme: Dispatch<SetStateAction<string | null>>,
  activeTheme: string | null
}

export const SideBar: FC<SideBarProps> = ({ themes, setTheme, activeTheme }) => {

  const getThemes = useMemo(() => {
    return themes?.map((theme) => (<li key={theme}><Button active={activeTheme === theme} onClick={() => setTheme(theme)}>{theme}</Button></li>))
  }, [themes, activeTheme])

  if (!themes) {
    return null
  }



  return (
    <aside className={s.root}>
      <ul className={s.list}>
        <li className={s.list__item}><Button active={activeTheme === null} onClick={() => setTheme(null)}>Все темы</Button></li>
        {getThemes}
      </ul>
    </aside>
  )
}