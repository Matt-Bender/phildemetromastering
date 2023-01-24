import React from 'react'
import Software from '../components/More/Software'
import ProjectsSection from '../components/Projects/ProjectsSection'
import Reference from '../components/More/Reference'
import BlankSpace from '../components/BlankSpace'
import WhyUsSection from '../components/More/WhyUsSection'


export default function ProjectsView() {
  return (
    <div>
      <BlankSpace />
        <ProjectsSection/>
      <BlankSpace />
        <WhyUsSection/>

        {/* <Software /> */}
        <BlankSpace />
        <Reference />
    </div>
  )
}
