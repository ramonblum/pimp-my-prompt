import { RotateCcw, Wand2 } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader } from './ui/card'

interface InputSectionProps {
  inputPrompt: string
  isEnhancing: boolean
  onInputChange: (value: string) => void
  onEnhance: () => void
  onReset: () => void
}

const InputSection = ({
  inputPrompt,
  isEnhancing,
  onInputChange,
  onEnhance,
  onReset,
}: InputSectionProps) => {
  return (
    <Card className='bg-white shadow-md p-4'>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>Input Prompt</h2>
        <p className='text-muted-foreground mb-4'>
          Enter your prompt to enhance
        </p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <textarea
          value={inputPrompt}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder='Type your prompt here...'
          className='w-full h-64 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none'
        />
        <div className='flex justify-end gap-2'>
          <Button
            onClick={onReset}
            variant={'ghost'}
          >
            <RotateCcw className='size-4' />
            <span>Reset</span>
          </Button>
          <Button
            onClick={onEnhance}
            disabled={!inputPrompt || isEnhancing}
          >
            <Wand2 className='size-4' />
            <span> {isEnhancing ? 'Enhancing...' : 'Enhance'}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
export default InputSection
