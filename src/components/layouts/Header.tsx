import React from 'react'
import {AppleFilled, SearchOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import MenuButton from '../MenuButton';
import { listMenu } from '../../constant';

type PropsType = {
  color: string;
} 

export default function Header({color}: PropsType) {
  
  const iconColor = color === 'black' ? 'white' : 'black';

  return (
    <div style={{ backgroundColor: color, height: '5vh', justifyContent: 'center', display: 'flex', position: 'fixed', top: 0, left: 0, right: 0}}>
      
      <AppleFilled style={{ color: iconColor, alignSelf: 'center', padding: '10px 15px' }} />
      {listMenu.map(function (data) {
        return (
          <MenuButton title={data} textColor={iconColor} />
          )
      })}

      <SearchOutlined style={{ color: iconColor, alignSelf: 'center', padding: '10px 15px' }} />
      <ShoppingCartOutlined style={{ color: iconColor, alignSelf: 'center', padding: '10px 15px' }}/>
    </div>
  )
}
