import styled from 'styled-components'
import React from 'react';
import {Link} from 'react-router-dom'
import x from 'icons/tags.svg'
// require('icons/tags.svg')
console.log(x);

const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  >ul{
    display:flex;
    >li{
      width:33.33%;
      text-align:center;
      padding:16px
    }
}`

const Nav = ()=>{
  return (
    <NavWrapper>
    <ul>
      <li>
        <svg>
          <use xlinkHref="#tags"></use>
        </svg>
        <Link to="/tags">标签页</Link>
      </li>
      <li>
        <Link to="/money">记账页</Link>
      </li>
      <li>
        <Link to="/statistics">统计页</Link>
      </li>
    </ul>
  </NavWrapper>
  )
}

export default Nav
