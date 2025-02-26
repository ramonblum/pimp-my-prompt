import { useBookmarks } from '@/app/hooks/use-bookmarks'
import { BookmarkX, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

const BookmarksSheet = () => {
  const {
    bookmarks,
    removeBookmark,
    loadBookmark,
    showBookmarks,
    setShowBookmarks,
  } = useBookmarks()

  return (
    <Sheet
      open={showBookmarks}
      onOpenChange={setShowBookmarks}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Bookmarks</SheetTitle>
          <SheetDescription>Check out your saved prompts</SheetDescription>
        </SheetHeader>
        <div className='space-y-4 overflow-y-auto max-h-[80vh]'>
          {bookmarks.length === 0 ? (
            <p className='text-muted-foreground text-center py-4'>
              No bookmarked prompts yet
            </p>
          ) : (
            bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className='bg-gray-50 rounded-lg p-4 space-y-3 hover:bg-gray-100 transition-colors'
              >
                <div className='flex justify-between items-start gap-4'>
                  <div className='flex-1'>
                    <p className='font-medium text-gray-800 mb-1'>
                      {bookmark.original.length > 100
                        ? `${bookmark.original.slice(0, 100)}...`
                        : bookmark.original}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {new Date(bookmark.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => loadBookmark(bookmark)}
                    >
                      <ChevronRight size={20} />
                    </Button>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => removeBookmark(bookmark.id)}
                      className='text-red-500 hover:text-red-600'
                    >
                      <BookmarkX size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default BookmarksSheet
