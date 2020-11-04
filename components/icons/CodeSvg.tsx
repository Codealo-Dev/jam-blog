import React from 'react'


interface Props {
  className?: string
}


const CodeSvg: React.FC<Props> = (props) => {
  return (<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 13" className={props.className}>
    <path d="M6.47 3.982V1.824L0 5.577v1.668l6.47 3.627V8.714L2.01 6.422v-.074l4.46-2.366zM11.783 13L15.26 0h-1.827L9.95 13h1.833zM16.53 3.975l4.453 2.373v.074L16.53 8.706v2.158L23 7.245V5.57l-6.47-3.745v2.15z" fill="#fff" />
  </svg>)
}


CodeSvg.defaultProps = {
  className: 'w-8 h-8 stroke-current text-black'
}


export default CodeSvg;