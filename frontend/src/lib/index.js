import sample from 'lodash/sample'
export const formatPracticeMetadata = ({ disciplines = [], subjects = [], description = '' }) => {
  if (disciplines.length && subjects.length) return `${sample(disciplines)}, ${sample(subjects)}`
  return description
}
