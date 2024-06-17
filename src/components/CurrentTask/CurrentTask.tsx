import React from 'react'

const CurrentTask = () => {
  return (

    <div className="w-full flex flex-col sm:gap-4 sm:py-4 sm:pl-14  border bg-card text-card-foreground shadow-sm">
            <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        
            <li className="flex w-full items-center justify-between">
                <span className="font-semibold">
                    Research About Next.js
                </span>
                <div className="flex gap-2">
                    <CopyIcon className="h-4 w-4" />
                    <CopyIcon className="h-4 w-4" />
                </div>
            </li>

        </div>
    </div>

  )
}




function CopyIcon(props: any) {
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
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    )
  }
  

export default CurrentTask