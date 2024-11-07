import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const NextPrevButton = ({goToPreviousPage, currentPage, totalPage}:{goToPreviousPage:()=>void, currentPage:number, totalPage:number}) => {
  return (
    <div className="flex items-center justify-between absolute left-0 -translate-y-full -bottom-[7rem] w-full">
            <Button variant="ghost" className={`${currentPage > 0 && "hidden"}`}>
              <ChevronLeft className="h-4 w-4 text-primary" />
              <span>Back to Login</span>
            </Button>
            <div className='w-full flex items-center justify-end'>
              <Button
              type='button'
                variant="outline"
                className={`border border-violet-500 bg-white text-violet-500 hover:text-violet-500 ${currentPage === 0 && "hidden"}`}
                onClick={goToPreviousPage}
              >
                <ChevronLeft className="h-4 w-4 text-violet-500" />
                <span>Previous Step</span>
              </Button>
              <Button type='submit' className="bg-gradient-violet ml-4" disabled={currentPage === totalPage}>
                <span>Next Step</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
  )
}

export default NextPrevButton