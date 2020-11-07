import React from 'react'


interface Props {
  className?: string
}


const HamburgerSvg: React.FC<Props> = (props) => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className={props.className}>
      <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M1.5 1.5h15M1.5 9.5h15M1.5 16.5h15" />
    </svg>
  )
}


HamburgerSvg.defaultProps = {
  className: 'w-8 h-8 stroke-current text-black'
}


export default HamburgerSvg;