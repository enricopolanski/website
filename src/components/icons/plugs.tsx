import {FC} from 'react'

export const PlugsIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={`fill-current ${className}`}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.99935 3C4.55163 3 4.99935 3.44772 4.99935 4V5.66667H8.33268V4C8.33268 3.44772 8.7804 3 9.33268 3C9.88497 3 10.3327 3.44772 10.3327 4V5.66667H10.666C11.2183 5.66667 11.666 6.11438 11.666 6.66667V9.33333C11.666 10.3058 11.2797 11.2384 10.5921 11.9261C9.90444 12.6137 8.97181 13 7.99935 13H7.66602V23.3333C7.66602 24.3058 8.05232 25.2384 8.73996 25.9261C9.42759 26.6137 10.3602 27 11.3327 27C12.3051 27 13.2378 26.6137 13.9254 25.9261C14.613 25.2384 14.9993 24.3058 14.9993 23.3333V8.66667C14.9993 7.16377 15.5964 5.72243 16.6591 4.65973C17.7218 3.59702 19.1631 3 20.666 3C22.1689 3 23.6102 3.59702 24.673 4.65973C25.7357 5.72243 26.3327 7.16377 26.3327 8.66667V19H26.666C27.6385 19 28.5711 19.3863 29.2587 20.0739C29.9464 20.7616 30.3327 21.6942 30.3327 22.6667V25.3333C30.3327 25.8856 29.885 26.3333 29.3327 26.3333H28.9993V28C28.9993 28.5523 28.5516 29 27.9993 29C27.4471 29 26.9993 28.5523 26.9993 28V26.3333H23.666V28C23.666 28.5523 23.2183 29 22.666 29C22.1137 29 21.666 28.5523 21.666 28V26.3333H21.3327C20.7804 26.3333 20.3327 25.8856 20.3327 25.3333V22.6667C20.3327 21.6942 20.719 20.7616 21.4066 20.0739C22.0943 19.3863 23.0269 19 23.9993 19H24.3327V8.66667C24.3327 7.69421 23.9464 6.76157 23.2587 6.07394C22.5711 5.38631 21.6385 5 20.666 5C19.6936 5 18.7609 5.38631 18.0733 6.07394C17.3857 6.76158 16.9993 7.69421 16.9993 8.66667V23.3333C16.9993 24.8362 16.4023 26.2776 15.3396 27.3403C14.2769 28.403 12.8356 29 11.3327 29C9.82979 29 8.38845 28.403 7.32574 27.3403C6.26304 26.2776 5.66602 24.8362 5.66602 23.3333V13H5.33268C4.36022 13 3.42759 12.6137 2.73996 11.9261C2.05232 11.2384 1.66602 10.3058 1.66602 9.33333V6.66667C1.66602 6.11438 2.11373 5.66667 2.66602 5.66667H2.99935V4C2.99935 3.44772 3.44706 3 3.99935 3ZM3.66602 7.66667V9.33333C3.66602 9.77536 3.84161 10.1993 4.15417 10.5118C4.46673 10.8244 4.89066 11 5.33268 11H7.99935C8.44138 11 8.8653 10.8244 9.17786 10.5118C9.49042 10.1993 9.66602 9.77536 9.66602 9.33333V7.66667H3.66602ZM23.9993 21C23.5573 21 23.1334 21.1756 22.8208 21.4882C22.5083 21.8007 22.3327 22.2246 22.3327 22.6667V24.3333H28.3327V22.6667C28.3327 22.2246 28.1571 21.8007 27.8445 21.4882C27.532 21.1756 27.108 21 26.666 21H23.9993Z"
      />
    </svg>
  )
}