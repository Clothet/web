import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <IndexLink to='/' activeClassName='route--active'> 酷衣櫥 </IndexLink>
    <IndexLink to='/counter' activeClassName='route--active'> 穿搭推薦 </IndexLink>
    <Link to='/favorite' activeClassName='route--active'> 我的收藏 </Link>
  </div>
)

export default Header
