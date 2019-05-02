import sample from 'lodash/sample'
export const formatPracticeMetadata = ({ disciplines = [], subjects = [], description = '' }) => {
  if (subjects.length > disciplines.length) return `${subjects.join(', ')}`
  if (disciplines.length && subjects.length) return `${sample(disciplines)}, ${sample(subjects)}`
  return description
}
