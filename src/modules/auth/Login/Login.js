import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import ImageLogin from '../../../assets/image/banner-login.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CustomButton from '../../../components/common/Button';
import { makeStyles } from '@mui/styles';
import LogoWeb from '../../../assets/image/logo-web.png';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from './api';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleLogin = useCallback(async (data) => {
    const rs = await dispatch(loginAction(data))
    if (rs.payload?.token) {
      const rememberPage = localStorage.getItem('rememberPage') || '/'
      window.location.href = rememberPage
    }
  }, [dispatch])


  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
        <div className='flex flex-col justify-center items-center bg-gray-90'>
          <div className='text-center w-full max-w-md px-8 mx-auto'>
            <div>
              <img src={LogoWeb} alt="Website logo" className="w-[120px] h-[120px] mx-auto" />
              <p className='text-[14px] text-[#ccc]'>Gia sư tận tâm, thành công cho bạn !</p>
            </div>
            <h2 className='text-[#205493] font-bold text-xl uppercase mt-3'>Đăng nhập</h2>
            <form onSubmit={handleSubmit(handleLogin)} className='w-full text-center mt-4'>
              <div className='mb-7'>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: 'Email is required' }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error ? fieldState.error.message : ''}
                      className={classes.input}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: 'Password is required' }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Mật Khẩu"
                      type="password"
                      variant="outlined"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error ? fieldState.error.message : ''}
                      className={classes.input}
                    />
                  )}
                />
              </div>
              <div className='flex mt-2 justify-between items-center text-[14px] text-[#0D5EF4]'>
                <p><Link to='/signup'>Đăng ký</Link></p>
                <p >Quên mật khẩu ?</p>
              </div>
              <div className='my-7'>
                <CustomButton title='Đăng nhập' buttonType='submit' className='w-full' />
              </div>
              <div className='flex justify-center items-center mt-4'>
                <div className='flex-1 h-px bg-[#205493] mr-2'></div>
                <p className='text-[#ccc] m-0 text-sm '>or Login with</p>
                <div className='flex-1 h-px bg-[#205493] ml-2'></div>
              </div>
              <div className='flex justify-center items-center mt-7'>
                <Button
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  className='text-sm h-11 w-full'
                >
                  Facebook
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  className='text-sm h-11 w-full'
                  style={{ marginLeft: '10px' }}
                >
                  Google
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className='relative h-full hidden md:block'>
          <img src={ImageLogin} alt="Login banner" className='absolute inset-0 w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Login;

const useStyles = makeStyles({
  input: {
    '& .MuiInputBase-root': {
      height: '50px',
      paddingLeft: '10px',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(14px, 14px) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    },
  },
});
