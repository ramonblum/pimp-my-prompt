import { useBookmarks } from '@/app/hooks/use-bookmarks'
import { Bookmark } from 'lucide-react'
import { Button } from './ui/button'

const BookmarkToogleButton = () => {
  const { bookmarks, setShowBookmarks, showBookmarks } = useBookmarks()
  return (
    <Button
      onClick={() => setShowBookmarks(!showBookmarks)}
      className='fixed bottom-6 right-6 p-6 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 hover:cursor-pointer'
    >
      <Bookmark className='w-5' />
      <span className='font-medium'>{bookmarks.length} Saved</span>
    </Button>
  )
}
export default BookmarkToogleButton
