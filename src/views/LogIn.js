import React from 'react';
import { useForm } from "react-hook-form"
import { useHistory } from 'react-router-dom';


export default function Login(props) {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const isSuccess = data?.username === 'admin' && data?.password === 'admin';
    let res = { stt: false };
    try {
      res = await (() => {
        return new Promise((resolve, reject) => setTimeout(() => {
          const initTime = Date.now();

          if (isSuccess) {
            resolve({
              stt: isSuccess,
              token: {
                secret: 'ai-love-you',
                iat: initTime,
                exp: initTime + 60 * 1
              },
            })
          } else {
            reject({ stt: false, token: {} })
          }

        }, 200))
      })()// function () {}()

    } catch (err) {
      console.log('err', err)
    }

    if (res.stt) {
      localStorage.setItem('x-api-token', JSON.stringify(res.token))
      history.push('/');
    } else {
      console.log('Love yourself')
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Log In (admin:admin)</h3>
        <div className='fg'>
          <input type='text' placeholder='username' {...register('username', { required: true })} />
          {errors.username && <span>required</span>}
        </div>
        <div className='fg'>
          <input type='password' {...register('password', { required: true })} />
          {errors.password && <span>required</span>}
        </div>
        <div className='fg mt-3'>
          <button type='submit'>Log In</button>
        </div>
      </form>
    </div>
  )
}