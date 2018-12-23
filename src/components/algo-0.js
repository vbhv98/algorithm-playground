import React from 'react'
import TwoInpAlgo from './TwoInpAlgo'

const getSequence = (s1, s2) => {
  function getLongestCommonSequence(s1, s2) {
    // console.table({ s1, s2, s1rest: s1.slice(1), s2rest: s2.slice(1) })
    console.table({ s1, s2 })
    if (s1.length === 0 || s2.length === 0) return ''
    let i = s2.indexOf(s1[0])
    if (i === -1) return getLongestCommonSequence(s1.slice(1), s2)
    return s1[0] + getLongestCommonSequence(s1.slice(1), s2.slice(i + 1))
  }

  const r1 = getLongestCommonSequence(s1, s2)
  const r2 = getLongestCommonSequence(s2, s1)
  console.table({ r1, r2 })
  return r1.length >= r2.length ? r1 : r2
}

const algo0 = () => {
  return (
    <TwoInpAlgo
      algorithm={getSequence}
      buttonTitle="Find Longest Subsequence"
    />
  )
}

export default algo0
