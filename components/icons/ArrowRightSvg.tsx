import React from 'react'


interface Props {
  className?: string
}


const ArrorRightSvg: React.FC<Props> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" className={props.className}>
      <path d="M9.5 14.5l4-4-4-4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


ArrorRightSvg.defaultProps = {
  className: 'w-8 h-8 stroke-current text-black'
}


export default ArrorRightSvg;