import React from 'react'


interface Props {
  className?: string
}


const FacebookSvg: React.FC<Props> = (props) => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className={props.className}>
      <g clip-path="url(#clip0)"><path d="M19.996 4.981h2.739V.211C22.262.146 20.637 0 18.745 0c-3.949 0-6.654 2.484-6.654 7.049v4.201H7.734v5.332h4.357V30h5.343V16.584h4.181l.664-5.333h-4.846V7.578c0-1.542.416-2.597 2.563-2.597z" fill="#fff" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v30H0z" /></clipPath>
      </defs></svg>
  )
}


FacebookSvg.defaultProps = {
  className: 'w-8 h-8 stroke-current text-black'
}


export default FacebookSvg;