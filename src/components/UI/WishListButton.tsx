import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import tw from 'twin.macro';
import styled from 'styled-components';

interface WishListButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const WishListButton = ({
  className,
  disabled,
  onClick,
  ...props
}: WishListButtonProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClickEvent = () => {
    setClicked(!clicked);
    onClick;
  };

  return (
    <button
      className={`${className} outline-none  focus:outline-none active:outline-none`}
      disabled={disabled}
      onClick={handleClickEvent}
      {...props}
    >
      {clicked ? <FillIcon /> : <OutlineIcon />}
    </button>
  );
};

export default WishListButton;

const Button = styled.button`
  ${tw``}
`;

const FillIcon = styled(AiFillHeart)`
  ${tw`outline-none  focus:outline-none active:outline-none`}
`;
const OutlineIcon = styled(AiOutlineHeart)`
  ${tw`outline-none  focus:outline-none active:outline-none`}
`;
