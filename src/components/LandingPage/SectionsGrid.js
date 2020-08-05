import React from 'react'
import { Link } from 'gatsby'
import { NavSections } from '../Nav/NavNoAuth'

const Cell = ({ linkTo, children }) => (
  <Link
    to={linkTo}
    className="border border-w-2 rounded-md border-gray-500 p-4 text-center flex items-center justify-center h-32 transition duration-200 ease-in-out hover:bg-gray-200"
  >
    {children}
  </Link>
)

export const SectionsGrid = () => (
  <div className="p-8 md:p-32 grid sm:grid-cols-3 gap-4 md:gap-8">
    {NavSections.map(({ linkTo, title }) => (
      <Cell key={title} to={linkTo}>
        {title}
      </Cell>
    ))}
  </div>
)
