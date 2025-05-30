'use client'
import { Login_BG, Logo } from "@/assets/export.assets";
import { Box, Button, Card, Checkbox, CommonTypography, FormControlLabel, Grid, Stack, TextField } from "@/common-components/export.common-components";
import { InputAdornment, IconButton } from "@mui/material";
import { Playfair } from "next/font/google";
import useLoginStyle from "./login.style";
import { Image } from "@/common-components/export.common-components";
import useLogin from "./login.hook";
import { Visibility, VisibilityOff } from '@mui/icons-material';

const playfairFont = Playfair({
  weight: '300'
})

export default function LoginScreen() {
  const {
    showPassword,
    watch,
    register,
    errors,
    handleLoginFieldUpdate,
    handleTogglePasswordVisibility,
    onSignInClick
  } = useLogin();
  const { emailId, password } = watch();
  // const { emailId, password } = getValues();
  const { loginStyles: { main_box, body_card, login_bg_image_box, login_details_box } } = useLoginStyle();

  return (
    // main box
    <Box
      sx={main_box}
    >
      {/* Body Card */}
      <Card
        sx={body_card}
      >
        {/* Login Background Image */}
        <Box
          sx={login_bg_image_box}
        >
          <Image
            src={Login_BG}
            alt='Login Page Image'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            fetchPriority='high'
            loading='eager'
            width={8335}
            height={4000}
          />
        </Box>
        {/* Login Details */}
        <Box
          component='form'
          height='100%'
          sx={login_details_box}
        >
          <Grid
            container
            display='flex'
            boxSizing='border-box'
            justifyContent='center'
            alignItems='center'
            width='100%'
            height='100%'
            position='relative'
            sx={{ flexFlow: 'column wrap' }}
          >
            <Grid
              width='100%'
              flexDirection='row'
              margin='0px'
            >
              <Stack
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                columnGap='8px'
              >
                <Image
                  src={Logo}
                  alt='Concord Seal'
                  style={{ width: '300px', height: '200px' }}
                  fetchPriority='high'
                  loading='eager'
                  width={293}
                  height={293}
                />
                {/* <CommonTypography 
                text='A1 SPECT-O-CRAFT LLP'
                sx={{
                  fontSize: {xs:'25px', sm:'40px', md: '28px', lg:'40px'},
                  fontWeight: '700'
                }}
                fontFamily={playfairFont.style.fontFamily}
                /> */}
              </Stack>
            </Grid>
            <Grid
              width='100%'
              flexDirection='row'
              margin='0px'
            >
              {/* <CommonTypography 
                text='Welcome Back!'
                sx={{
                  fontSize: {xs:'37px', sm:'45px', md: '45px', lg: '55px'},
                  fontWeight: '700',
                  textAlign: 'center',
                  color: '#339BFF'
                }}
                fontFamily={playfairFont.style.fontFamily}
                /> */}
            </Grid>
            <Grid
              width='100%'
              display='flex'
              flexDirection='row'
              justifyContent='center'
              alignItems='center'
              margin='0px'
            >
              <Stack
                display='flex'
                flexDirection='column'
                padding='16px'
                rowGap='8px'
                sx={{
                  width: { xs: '280px', sm: '400px', md: '280px', lg: '400px' },
                  paddingTop: { xs: '32px' },
                  boxShadow: { xs: 'rgba(0,0,0,0.6) 4px 2px 6px' },
                  borderRadius: { xs: '15px' }
                }}
              >
                {/* Email TextField */}
                <TextField
                  {...register('emailId', { required: 'Email ID is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email ID needs @ and .' } })}
                  error={errors.emailId?.message ? true : false}
                  fullWidth
                  size='small'
                  required
                  label='Email Address'
                  name="emailId"
                  type="email"
                  sx={{
                    '& .MuiInputLabel-root': { transformOrigin: 'left top' },
                    '& .MuiFormLabel-asterisk': { color: 'red' }
                  }}
                  value={emailId}
                  onChange={(e) => handleLoginFieldUpdate('emailId', e.target.value)}
                  helperText={errors.emailId?.message}
                />
                {/* Password Textfield */}
                <TextField
                  {...register('password', { required: 'Password is required' })}
                  error={errors.password?.message ? true : false}
                  fullWidth
                  size='small'
                  required
                  label='Password'
                  name="password"
                  sx={{
                    '& .MuiInputLabel-root': { transformOrigin: 'left top' },
                    '& .MuiFormLabel-asterisk': { color: 'red' },
                  }}
                  value={password}
                  onChange={(e) => handleLoginFieldUpdate('password', e.target.value)}
                  helperText={errors.password?.message}
                type={showPassword ? 'string' : 'password'}
                slotProps={{
                  input: {
                    endAdornment:
                      <InputAdornment position='end' >
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleTogglePasswordVisibility}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment >
                  }
                }}
                />
                {/* Remember Checkbox */}
                {/* <Stack display='flex' flexDirection='column' rowGap='8px'>
                  <FormControlLabel control={<Checkbox name='rememberMe' checked={loginData.rememberMe} onChange={handleLoginDataChange}/>} label="Remember me" />
                </Stack> */}
                <Button 
                  sx={{textTransform:'none', fontFamily: playfairFont.style.fontFamily, fontSize: '18px', fontWeight: '500'}}
                  // className={playfairFont.className} 
                  size='large' 
                  variant='contained' 
                  onClick={onSignInClick} 
                >Sign In</Button>
                <Stack
                  display='flex'
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  justifyContent='space-between'
                  alignItems={{ xs: 'flex-start' }}
                >
                  <Button
                    className={playfairFont.className}
                    sx={{
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textTransform: 'none',
                      fontSize: '12px',
                      textDecoration: 'underline'
                    }}
                  // onClick={() => onForgotPasswordClick(loginData.emailId)}
                  >Forgot password?</Button>
                  <Button
                    className={playfairFont.className}
                    sx={{
                      display: 'inline-flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textTransform: 'none',
                      fontSize: '12px',
                      textDecoration: 'underline'
                    }}
                  >Don't have an account? Sign Up</Button>
                </Stack>
              </Stack>
            </Grid>
            {/* Footer */}
            <Grid
              width='100%'
              flexDirection='row'
              margin='0px'
              position='absolute'
              bottom='0px'
            >
              <Stack
                display='flex'
                flexDirection='row'
                justifyContent='center'
                alignItems='center'
              >
                <CommonTypography
                  text='A1 SPECT-O-CRAFT LLP, Inc.'
                  sx={{
                    margin: '0px',
                    lineHeight: 1.5,
                    letterSpacing: '0.00938em',
                    color: 'black',
                    fontSize: '12px'
                  }}
                  fontFamily={playfairFont.style.fontFamily}
                />
                <Button
                  className={playfairFont.className}
                  sx={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textTransform: 'none',
                    fontSize: '12px',
                    textDecoration: 'underline'
                  }}
                >Privacy Policy</Button>
              </Stack>
            </Grid>

          </Grid>
        </Box>
      </Card>
    </Box>
  )
}