import React from 'react'
import styles from './styles.module.css'
import { Dropdown } from 'antd'
import { subMenu } from '../../constant';

type PropsType = {
  title: string;
  textColor: string;
}

function MenuButton({ title, textColor }: PropsType) {

  return (
    <Dropdown
      className={styles.container}
      dropdownRender={(menu) => (
        <div style={{ backgroundColor: 'black', width: '100vw'}}>
          <div style={{color: 'white'}}>!!!!!!!!!!!!!</div>
          <div style={{ color: 'white' }}>!!!!!!!!!!!!!</div>
          <div style={{color: 'white'}}>!!!!!!!!!!!!!</div>
          <div style={{color: 'white'}}>!!!!!!!!!!!!!</div>
          <div style={{ color: 'white' }}>!!!!!!!!!!!!!</div>
          
        </div>
      )}
    >
      <div style={{ color: textColor, fontSize: 12 }} onClick={(e) => e.preventDefault()}>
        {title}
      </div>
    </Dropdown>
  )
}

export default MenuButton