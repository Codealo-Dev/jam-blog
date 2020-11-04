import React from 'react'


interface Props {
  className?: string
}


const SendSvg: React.FC<Props> = (props) => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" className={props.className}>
      <path d="M33 0L0 18l10.546 3.788L26.813 7 14.44 23.186l.01.004-.012-.004V32l5.914-6.69L27.844 28 33 0z" />
    </svg>
  )
}


SendSvg.defaultProps = {
  className: 'w-8 h-8 stroke-current text-black'
}


export default SendSvg;