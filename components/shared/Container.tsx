interface ContainerProps {
  children: React.ReactNode;
  isCategory?: boolean;
  isListing?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, isCategory, isListing }) => {
  return (
    <div
      className={
      `max-w-[2520px]
      mx-auto
      xl:px-20
      md:px-10
      sm:px-2
      px-4
      ${isCategory ? 'flex justify-center' : ''}
      ${isListing ? 'pb-40' : ''}
      `
    }
    >
      {children}
    </div>
  )
}

export default Container;
