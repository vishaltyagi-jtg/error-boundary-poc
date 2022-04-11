import React from 'react'
import withChaos from '../../HOC/withChaos';
import withErrorBoundary from '../../HOC/withErrorBoundary';

const PageThree = () => {
  return (
    <h1 className='center'>It may throw custom error as Loading CSS chunk failed.</h1>
  )
}

 export default withErrorBoundary(withChaos(PageThree, 9, "Loading CSS chunk 118 failed."));
// export default PageThree;