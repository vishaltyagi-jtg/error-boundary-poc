import React, {Suspense} from 'react'
import {createChaos} from '../utils/chaos';

const withSuspence = (Component: any, level?: number, message?:string) => {
    return (props: any) => {
        
        return <Suspense fallback={<h1>Loading...</h1>}> <Component {...props} /> </Suspense>
    }
}

export default withSuspence;