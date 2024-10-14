import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import ImageSignUp from '../../../assets/image/register.png';
import CustomButton from '../../../components/common/Button';
import { makeStyles } from '@mui/styles';
import LogoWeb from '../../../assets/image/logo-web.png';
import { useDispatch } from 'react-redux';
import { createUser } from './api';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const classes = useStyles();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleSignUp = async (data) => {
    let res = await dispatch(createUser({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      is_active: true,
      password: data.password,
      role: "student"
    }))
    console.log(res)
    if (res.payload) {
      navigate('/login')
    }
  };

  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
        <div className='flex flex-col justify-center items-center bg-gray-90'>
          <div className='text-center w-full max-w-md px-8 mx-auto'>
            <div>
              <img src={LogoWeb} alt="Website logo" className="w-[90px] h-[90px] mx-auto" />
              <p className='text-[14px] text-[#ccc]'>Gia sư tận tâm, thành công cho bạn !</p>
            </div>
            <h2 className='text-[#205493] font-bold text-xl uppercase mt-2'>Đăng ký</h2>
            <form onSubmit={handleSubmit(handleSignUp)} className='w-full text-center mt-4'>
              <div className='mb-4'>
                <Controller
                  name='full_name'
                  control={control}
                  rules={{ required: 'full_name is required' }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Họ và Tên"
                      variant="outlined"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error ? fieldState.error.message : ''}
                      className={classes.input}
                    />
                  )}
                />
              </div>
              <div className='mb-4'>
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
              <div className='mb-4'>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: 'phone is required' }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Số điện Thoại"
                      type="phone"
                      variant="outlined"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error ? fieldState.error.message : ''}
                      className={classes.input}
                    />
                  )}
                />
              </div>
              <div className='mb-4'>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: 'Password is required' }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Mât khẩu"
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

              {/* go to login */}
              <div className='text'>
                Đã có tài khoản ? <Link className='text-[#0D5EF4]' to='/login'>Đăng nhập</Link>
              </div>

              <div className='my-7'>
                <CustomButton className='w-2/4 h-11' type="success" color="primary">Đăng ký</CustomButton>
              </div>
            </form>
          </div>
        </div>
        <div className='relative h-full hidden md:block'>
          <img src={ImageSignUp} alt="Login banner" className='absolute inset-0 w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Signup;

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
