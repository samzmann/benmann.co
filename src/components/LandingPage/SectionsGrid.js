import React from 'react'

const Cell = ({ children }) => (
  <div className="border border-w-2 rounded-md border-gray-500 p-4 text-center flex items-center justify-center h-32">
    {children}
  </div>
)

export const SectionsGrid = () => (
  <div className="p-8 md:p-32 grid sm:grid-cols-3 gap-4 md:gap-8">
    <Cell>Articles</Cell>
    <Cell>Travel Blog</Cell>
    <Cell>Drawings</Cell>
    <Cell>Projects</Cell>
    <Cell>CV</Cell>
  </div>
)
