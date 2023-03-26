import React, { forwardRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface PageSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageSection = forwardRef(
  ({ id, className, children, ...props }: PageSectionProps, ref) => {
    return (
      <SectionWrapper
        {...props}
        id={id}
        className={`${className}`}
      >
        <ContentWrapper>{children}</ContentWrapper>
      </SectionWrapper>
    );
  }
);

PageSection.displayName = 'PageSection';

export default PageSection;

const SectionWrapper = styled.section`
  ${tw`bg-bg-light`}
`;

const ContentWrapper = styled.div`
  ${tw`px-8 mx-auto max-w-7xl bg-bg-light md:px-4`}
`;
