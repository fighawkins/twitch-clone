import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <p className= "text-red-500 font-bold">
      <Button size="lg" variant="ghost">
      Click me
        </Button>
    </p>
  )
}
