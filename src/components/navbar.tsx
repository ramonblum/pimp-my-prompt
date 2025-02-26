import { useBookmarks } from '@/app/hooks/use-bookmarks'
import { Sparkles } from 'lucide-react'

const Navbar = () => {
  const { bookmarks } = useBookmarks()
  return (
    <nav className='bg-white shadow-md'>
      <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Sparkles className='h-8 w-8 text-purple-600' />
            <span className='ml-2 text-xl font-bold text-gray-800'>
              PIMP My Prompt!
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-gray-600'>
              {bookmarks.length} Saved Prompt{bookmarks.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
