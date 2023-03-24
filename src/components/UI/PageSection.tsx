import React, {forwardRef} from 'react'

interface PageSectionProps extends React.HTMLAttributes<HTMLDivElement>{}

const PageSection = forwardRef(({id, className, children, ...props}: PageSectionProps, ref) => {
  return (
    <section
      {...props}
      id={id}
      className={`bg-bg-light ${className}`}
    >
      <div className='max-w-7xl mx-auto bg-bg-light px-8 md:px-4'>
        {children}
      </div>
    </section>
  );
})

PageSection.displayName = "PageSection";

export default PageSection
