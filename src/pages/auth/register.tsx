import React, { useRef, useState, useEffect } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from '@/components/UI/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaCheckCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import { useSession, signIn } from 'next-auth/react';


type Props = {};

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const SignUp = (props: Props) => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [focusPwd, setFocusPwd] = useState(false);

  const [match, setMatch] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [focusMatch, setFocusMatch] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const isMatch = match === pwd;
    setValidMatch(isMatch);
  }, [pwd, match]);


  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <main className='grid h-screen bg-primary-light place-items-center'>
      <section className='w-full max-w-xl px-2'>
        <FormContainer>
          <FormHeading>Register</FormHeading>
          <Form>
            <FormControl>
              <Input
                type='email'
                id='email'
                placeholder='email address'
                className='peer'
                autoComplete='false'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                required
                aria-invalid={validEmail ? false : true}
              />
              {validEmail && (
                <FaCheckCircle className='absolute text-xl text-green-500 right-3 top-2.5' />
              )}
              {!email || validEmail ? (
                ''
              ) : (
                <FaTimesCircle className='absolute text-xl text-red-500 right-3 top-2.5' />
              )}
              <div></div>
              <Label htmlFor='email'>Email address</Label>
            </FormControl>
            <FormControl>
              <Input
                type='password'
                id='pwd'
                placeholder='password'
                className='peer'
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setFocusPwd(true)}
                onBlur={() => setFocusPwd(false)}
                required
                aria-invalid={validPwd ? false : true}
              />
              {validPwd && (
                <FaCheckCircle className='absolute text-xl text-green-500 right-3 top-2.5' />
              )}
              {!pwd || validPwd ? (
                ''
              ) : (
                <FaTimesCircle className='absolute text-xl text-red-500 right-3 top-2.5' />
              )}
              <div
                id='pwdnote'
                className={`${
                  focusPwd && !validPwd && pwd
                    ? 'bg-black p-2 flex gap-3 rounded-md text-bg-light mt-2'
                    : 'hidden'
                }`}
              >
                <FaInfoCircle className='text-2xl' />
                <p>
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character. <br />
                  allowed special characters{' '}
                  <span aria-label='exclamation mark'>!</span>
                  <span aria-label='at symbol'>@</span>
                  <span aria-label='hash tag'>#</span>
                  <span aria-label='dollar sign'>$</span>
                  <span aria-label='percent symbol'>%</span>
                </p>
              </div>
              <Label htmlFor='pwd'>Password</Label>
            </FormControl>
            <FormControl>
              <Input
                type='password'
                id='matchPwd'
                placeholder='confirm password'
                className={`peer`}
                value={match}
                onChange={(e) => setMatch(e.target.value)}
                onFocus={() => setFocusMatch(true)}
                onBlur={() => setFocusMatch(false)}
                required
                aria-invalid={!validMatch ? true : false}
                aria-describedby='pwdnote'
              />
              {validMatch && match && (
                <FaCheckCircle className='absolute text-xl text-green-500 right-3 top-2.5' />
              )}
              {!match || validMatch ? (
                ''
              ) : (
                <FaTimesCircle className='absolute text-xl text-red-500 right-3 top-2.5' />
              )}
              <Label htmlFor='matchPwd'>Confirm Password</Label>
            </FormControl>
            <div className='flex flex-col gap-2.5'>
              <Button
                className='rounded-md disabled:bg-gray-500'
                disabled={
                  !validEmail && !validPwd && !validMatch ? true : false
                }
              >
                Sign up
              </Button>
              <Button
                className='flex items-center justify-center gap-2 rounded-md'
                variant='outlined'
                onClick={handleGoogleSignIn}
              >
                Google
                <FcGoogle className='text-xl' />
              </Button>
            </div>
          </Form>
        </FormContainer>
      </section>
    </main>
  );
};

export default SignUp;

const FormContainer = styled.div`
  ${tw`flex flex-col gap-4 p-10 rounded-md bg-bg-light text-primary-dark`}
`;

const FormHeading = styled.h2`
  ${tw`pb-4 text-xl font-bold uppercase text-primary-dark`}
`;

const Form = styled.form`
  ${tw`flex flex-col gap-10`}
`;

const FormControl = styled.fieldset`
  ${tw`relative flex flex-col focus-within:outline-none`}
`;

const Label = styled.label`
  ${tw`absolute left-0 font-semibold -top-3.5 peer-placeholder-shown:top-2 peer-placeholder-shown:text-primary-light text-primary-dark transition-all duration-200 ease-in-out peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-base peer-focus:text-primary-dark`}
`;

const Input = styled.input`
  ${tw`pl-0 text-gray-500 border-0 border-b bg-bg-light placeholder:capitalize border-b-primary-dark focus:outline-0 placeholder:text-transparent focus:ring-0`}
`;
