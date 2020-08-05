import React from 'react'
import { Link } from 'gatsby'

const Cell = ({ linkTo, children }) => (
  <Link
    to={linkTo}
    className="border border-w-2 rounded-md border-gray-500 p-4 text-center flex items-center justify-center h-32"
  >
    {children}
  </Link>
)

export const SectionsGrid = () => (
  <div className="p-8 md:p-32 grid sm:grid-cols-3 gap-4 md:gap-8">
    <Cell linkTo="/articles">Articles</Cell>
    <Cell linkTo="/travelblog">Travel Blog</Cell>
    <Cell linkTo="/drawings">Drawings</Cell>
    <Cell linkTo="/projects">Projects</Cell>
    <Cell linkTo="/cv">CV</Cell>
  </div>
)
