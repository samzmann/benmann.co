import React from 'react'
import SEO from '../seo'
import Layout from '../layout'
import { SectionsGrid } from './SectionsGrid'
import { TitleHeader } from './TitleHeader'

export const LandingPageComponent = () => (
  <Layout>
    <SEO title="Home" />
    <TitleHeader />
    <SectionsGrid />
  </Layout>
)
