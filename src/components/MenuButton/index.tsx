import React from 'react'
import styles from './styles.module.css'

type PropsType = {
  title: string;
  textColor: string;
}

function MenuButton({ title, textColor }: PropsType) {
  return (
    <div className={styles.container} >
      <div style={{ color: textColor, fontSize: 12 }}>
        {title}
      </div>
    </div>
  )
}

export default MenuButton