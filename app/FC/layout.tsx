import React from 'react'

const layoutFC = ({
    children,
}: {
    children:React.ReactNode
}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layoutFC