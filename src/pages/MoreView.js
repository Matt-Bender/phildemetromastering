import React from 'react'
import Software from '../components/More/Software'
import WhyUs from '../components/More/WhyUs'
import Reference from '../components/More/Reference'
import BlankSpace from '../components/BlankSpace'


export default function MoreView() {
  return (
    <div>
      <BlankSpace />
        <WhyUs/>
      <BlankSpace />

        <Software />
        <BlankSpace />
        <Reference />
    </div>
  )
}
