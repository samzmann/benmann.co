import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { GlobalStateContext } from '../../context/globalContext'

export const NavSections = [
  { linkTo: '/articles', title: 'Articles' },
  { linkTo: '/travelblog', title: 'Travel Blog' },
  { linkTo: '/drawings', title: 'Drawings' },
  { linkTo: '/projects', title: 'Projects' },
  { linkTo: '/cv', title: 'CV' },
]

export const NavNoAuth = () => {
  return (
    <div className="hidden md:block mx-auto">
      <div className="flex">
        {NavSections.map(({ linkTo, title }) => (
          <Link key={title} to={linkTo} className="header-link">
            {title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export const NavNoAuthMobile = () => {
  const { setShowMobileNav } = useContext(GlobalStateContext)
  return (
    <div className="px-2 pt-2 pb-3">
      {NavSections.map(({ linkTo, title }) => (
        <Link
          key={title}
          to={linkTo}
          onClick={() => {
            setShowMobileNav(false)
          }}
          className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          {title}
        </Link>
      ))}
    </div>
  )
}
