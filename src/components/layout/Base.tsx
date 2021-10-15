import { GlobalStyle } from "components/GlobalStyle"
import { FontVariation } from "FontVariation"
import * as React from 'react'


const DEFAULT_FONT_SETTINGS: FontVariation = {
  wght: 400,
  slnt: 0,
  FLAR: 0,
  VOLM: 0
}

export const Base: React.FC = ({ children }) => (
  <>
    <GlobalStyle fontVariationSettings={DEFAULT_FONT_SETTINGS} />
    {children}
  </>
)
