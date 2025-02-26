import { Bookmark, Copy } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader } from './ui/card'

interface OutputSectionProps {
  enhancedPrompt: string
  onCopy: () => void
  onBookmark: () => void
}

const OutputSection = ({
  enhancedPrompt,
  onBookmark,
  onCopy,
}: OutputSectionProps) => {
  return (
    <Card className='bg-white shadow-md p-4'>
      <CardHeader>
        <h2 className='text-2xl font-semibold '>Enhanced Prompt</h2>
        <p className='text-muted-foreground mb-4'>Your improved prompt</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='w-full h-64 p-4 bg-gray-50 rounded-lg overflow-auto whitespace-pre-wrap'>
          {enhancedPrompt || 'Enhanced prompt will be displayed here...'}
        </div>
        <div className='flex justify-end gap-2'>
          <Button
            variant={'ghost'}
            onClick={onCopy}
            disabled={!enhancedPrompt}
          >
            <Copy className='w-4 h-4' />
            <span>Copy</span>
          </Button>
          <Button
            onClick={onBookmark}
            disabled={!enhancedPrompt}
          >
            <Bookmark className='w-4 h-4 ' />
            <span>Bookmark</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
export default OutputSection
