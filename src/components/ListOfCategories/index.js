import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-afisaacs-server-ptq2tov5n.now.sh/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 190
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', () => onScroll())
    return (document.removeEventListener('scroll', onScroll))
  })

  const renderList = (fixed, addInView) => {
    return (
      <List fixed={fixed} addInView={addInView}>
        {loading &&
          [1, 2, 3, 4, 5].map(item => (
            <Item key={item}>
              <Category loading />
            </Item>
          ))
        }
        {!loading &&
          categories.map((category) => (
            <Item key={category.id}>
              <Category
                {...category}
              />
            </Item>)
          )
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {ReactDOM.createPortal(renderList(true, showFixed), document.getElementById('categories'))}
    </>
  )
}
