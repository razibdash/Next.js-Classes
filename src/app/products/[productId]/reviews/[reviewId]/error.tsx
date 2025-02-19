'use client'
import React from 'react'

const ErrorBoundary = ({error}:{error:Error}) => {

  return (
    <h2>{error.message}</h2>
  )
}

export default ErrorBoundary