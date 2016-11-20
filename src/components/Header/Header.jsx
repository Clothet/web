import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <IndexLink to='/' activeClassName='route--active'>
      <div id="logo">酷衣櫥</div>
    </IndexLink>

    <div>
      <Link to='/' className='item item1' activeClassName='item-active'>
        穿搭推薦
      </Link>
      <Link to='/counter' className='item item2' activeClassName='item-active'>
        我的收藏
      </Link>
      <div className="underline" />
    </div>
  </div>
)

export default Header
