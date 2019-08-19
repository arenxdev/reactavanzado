import { useState } from 'react'

export const useInputValue = (initialvalue = '') => {
  const [value, setValue] = useState(initialvalue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}
