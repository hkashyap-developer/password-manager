import React from 'react'
import { Button } from "@/components/ui/button"


const CopyBtn = () => {
  return (
    <div>

    <Button
        size="icon"
        variant="outline"
        className="h-6 w-6"
        >
        <HomeIcon className="h-3 w-3" />
        <span className="sr-only">Copy Order ID</span>
    </Button>


    </div>
  )
}


function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }

export default CopyBtn