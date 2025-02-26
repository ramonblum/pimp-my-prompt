import { useContext } from 'react'
import { BookmarkContext } from '../contexts/boorkmarks-context'

export function useBookmarks() {
  const context = useContext(BookmarkContext)
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider')
  }
  return context
}
