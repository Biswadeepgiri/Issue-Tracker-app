import React from 'react'

const Spinner = () => {
  return (
    <div className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white-600 rounded-full dark:text-white-500" role="status" aria-label="loading">
  <span className="sr-only">Loading...</span>
</div>
  )
}

export default Spinner