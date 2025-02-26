'use client'

import { createContext, useEffect, useState } from 'react'
import type { BookmarkedPromptType } from '../types/bookmark'

interface BookmarkContextType {
  bookmarks: BookmarkedPromptType[]
  saveBookmark: (original: string, enhanced: string) => void
  removeBookmark: (id: string) => void
  loadBookmark: (bookmark: BookmarkedPromptType) => void
  showBookmarks: boolean
  setShowBookmarks: (show: boolean) => void
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
)

function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkedPromptType[]>([])
  const [showBookmarks, setShowBookmarks] = useState(false)

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('promptBookmarks')
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks))
    }
  }, [])

  const saveBookmarks = (newBookmarks: BookmarkedPromptType[]) => {
    setBookmarks(newBookmarks)
    localStorage.setItem('promptBookmarks', JSON.stringify(newBookmarks))
  }

  const saveBookmark = (original: string, enhanced: string) => {
    if (!original || !enhanced) return

    const newBookmark: BookmarkedPromptType = {
      id: Date.now().toString(),
      original,
      enhanced,
      timestamp: Date.now(),
    }

    saveBookmarks([...bookmarks, newBookmark])
  }

  const removeBookmark = (id: string) => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id)
    saveBookmarks(newBookmarks)
  }

  const loadBookmark = (bookmark: BookmarkedPromptType) => {
    console.log('Loading bookmark:', bookmark)
  }

  const value = {
    bookmarks,
    saveBookmark,
    removeBookmark,
    loadBookmark,
    showBookmarks,
    setShowBookmarks,
  }

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkProvider
