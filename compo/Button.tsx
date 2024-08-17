"use client"
import { useTheme } from "./useTheme"
import React from "react"

export default function Button() {
    const {theme, toggleTheme} = useTheme()
  return (
        <button onClick={toggleTheme}>{theme}</button>
  )
}