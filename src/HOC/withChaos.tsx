import React from 'react'
import {createChaos} from '../utils/chaos';

function withChaos(Component: any, level?: number, message?:string) {
    return (props: any) => {
        
        return createChaos(level, message)? null : <Component {...props} />
    }
}

export default withChaos