import React from 'react'
import {CORE_CONCEPTS} from '../data/data.js'
import CoreConcept from './Test20240520_sub_CoreConcept'

export default function Test20240520() {

  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const desc = reactDescriptions[genRandomInt(2)];

  return (
    <>
    <CoreConcept {...CORE_CONCEPTS[genRandomInt(3)]}/>
    <div>{desc} -- Test20240520</div>
    </>
  )
}
