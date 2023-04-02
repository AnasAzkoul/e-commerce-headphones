import { useRouter } from 'next/router';
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

type Props = {};

const BreadCrumbs = (props: Props) => {
  const router = useRouter();

  const linkPath = router.asPath.split('/');

  const getBreadCrumbs = linkPath.map((item, index) => {
    return {
      crumb: item.length === 0 ? 'home' : item,
      path:
        item.length === 0 ? '/' : `${linkPath.slice(0, index + 1).join('/')}`,
    };
  });

  return (
    <BreadCrumbsContainer>
      {getBreadCrumbs.map((crump, index) => {
        return (
          <div
            key={index}
            className='flex items-center gap-4'
          >
            {index !== getBreadCrumbs.length && index !== 0 && (
              <span className='ml-2 text-primary'>
                <MdArrowForwardIos />
              </span>
            )}
            <Link href={crump.path}>
              <span className='text-sm text-gray-400 capitalize'>{crump.crumb}</span>
            </Link>
          </div>
        );
      })}
    </BreadCrumbsContainer>
  );
};

export default BreadCrumbs;

const BreadCrumbsContainer = styled.div`
  ${tw`flex flex-wrap`}
`;
