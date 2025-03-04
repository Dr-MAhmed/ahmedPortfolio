"use client"

import { useEffect, useState } from "react"
import CustomCursor from "./custom-cursor"

export default function ClientCursor() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <CustomCursor />
}