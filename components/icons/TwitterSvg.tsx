import React from 'react'


interface Props {
  className?: string
}


const TwitterSvg: React.FC<Props> = (props) => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className={props.className}>
      <path d="M25.328 9.237A10.605 10.605 0 0028 6.487v-.001c-.967.42-1.997.7-3.071.836a5.276 5.276 0 002.345-2.928 10.704 10.704 0 01-3.38 1.283A5.354 5.354 0 0020.001 4c-2.951 0-5.327 2.381-5.327 5.3 0 .42.036.823.123 1.208A15.12 15.12 0 013.81 4.965a5.32 5.32 0 00-.73 2.678c0 1.835.95 3.462 2.368 4.404a5.294 5.294 0 01-2.408-.653v.058c0 2.575 1.847 4.714 4.27 5.207a5.328 5.328 0 01-1.397.175 4.73 4.73 0 01-1.009-.09 5.379 5.379 0 004.98 3.69 10.755 10.755 0 01-6.609 2.26c-.437 0-.856-.02-1.275-.072A15.076 15.076 0 0010.177 25c9.407 0 15.537-7.801 15.151-15.763z" />
    </svg>
  )
}


TwitterSvg.defaultProps = {
  className: 'w-8 h-8 stroke-current text-black'
}


export default TwitterSvg;