import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    window.fetch('https://petgram-afisaacs-server-ptq2tov5n.now.sh/categories')
      .then(res => { if (!isCancelled) return res.json() })
      .then(data => {
        if (!isCancelled) {
          setCategories(data)
          setLoading(false)
        }
      })
    return () => {
      isCancelled = true
    }
  }, [])
  return { categories, loading }
}
