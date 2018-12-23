import React from 'react'
import TwoInpAlgo from './TwoInpAlgo'

const find_missing_v1 = (list1, list2) => {
  const array1 = list1.split(' ')
  const array2 = list2.split(' ')

  const res = array1.filter(e => array2.indexOf(e) === -1)
  return '' + res[0]
}
const find_missing_v2 = (list1, list2) => {
  return ''
}

const find_missing = (list1, list2) => {
  return find_missing_v1(list1, list2)
}

const algo1 = props => {
  return <TwoInpAlgo algorithm={find_missing} buttonTitle="Find Missing" />
}

export default algo1
