import React from 'react'

export default function useLoginStyle() {
  const loginStyles = {
    main_box: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#F3FEFF'
    },
    body_card: {
      width: { xs: '100vw', md: '75vw' },
      height: { xs: '100vh', md: '90vh' },
      borderRadius: { xs: '0px', md: '15px' },
      boxShadow: 'rgba(0,0,0,0.6) 4px 0px 6px',
      display: 'flex',
      flexDirection: 'row',
    },
    login_bg_image_box: {
      width: { xs: '0%', md: '50%' },
      height: { xs: '0%', md: '100%' },
    },
    login_details_box: {
      width: { xs: '100%', md: '50%' },
      backgroundColor: '#F3FEFF'
    }
  }
  return {loginStyles}
}
