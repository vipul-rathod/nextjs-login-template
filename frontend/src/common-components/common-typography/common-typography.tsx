import {Typography} from '@/common-components/export.common-components';
import { SxProps, Theme } from '@mui/material';
import React, { ForwardedRef, forwardRef } from 'react'

interface CommonTypographyProps {
  text: string
  fontFamily ?: string
  sx?: SxProps<Theme>
} 


const CommonTypography = forwardRef(({text, fontFamily, sx}: CommonTypographyProps, _ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Typography sx={sx} fontFamily={fontFamily}>{text}</Typography>
  )
})

export default CommonTypography