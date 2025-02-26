'use client'

import BookmarksSheet from '@/components/boorkmarks-sheet'
import BookmarkToogleButton from '@/components/boorkmarks-toggle-button'
import Header from '@/components/header'
import InputSection from '@/components/input-section'
import Navbar from '@/components/navbar'
import OutputSection from '@/components/output-section'
import { useState } from 'react'
import { enhancePrompt } from './actions/prompt'
import { useBookmarks } from './hooks/use-bookmarks'
import Footer from '@/components/footer'

export default function Home() {
  const [inputPrompt, setInputPrompt] = useState('')
  const [enhancedPrompt, setEnhancedPrompt] = useState('')
  const [isEnhancing, setIsEnhancing] = useState(false)

  const { saveBookmark } = useBookmarks()

  const handleEnhance = async () => {
    setIsEnhancing(true)
    const enhancedPrompt = await enhancePrompt({ prompt: inputPrompt })
    if (enhancedPrompt) {
      setEnhancedPrompt(enhancedPrompt)
    } else {
      alert('Failed to enhance prompt. Please try again.')
    }
    setIsEnhancing(false)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(enhancedPrompt)
    alert('Copied to clipboard!')
  }

  const resetPrompts = () => {
    setInputPrompt('')
    setEnhancedPrompt('')
  }

  const handleSaveBookmark = () => {
    if (!inputPrompt || !enhancedPrompt) return
    saveBookmark(inputPrompt, enhancedPrompt)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-blue-50'>
      <Navbar />

      <div className='max-w-7xl mx-auto p-6'>
        <Header />

        <div className='grid md:grid-cols-2 gap-6'>
          <InputSection
            inputPrompt={inputPrompt}
            isEnhancing={isEnhancing}
            onInputChange={setInputPrompt}
            onEnhance={handleEnhance}
            onReset={resetPrompts}
          />
          <OutputSection
            enhancedPrompt={enhancedPrompt}
            onCopy={copyToClipboard}
            onBookmark={handleSaveBookmark}
          />
        </div>

        <Footer />
      </div>

      <BookmarkToogleButton />
      <BookmarksSheet />
    </div>
  )
}
