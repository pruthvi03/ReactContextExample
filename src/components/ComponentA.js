import React from 'react'
import ComponentB from './ComponentB'
const ComponentA = () => {
    return (
        <div>
            <div>ComponentA</div>
            <ComponentB title="component A input"/>
        </div>
    )
}

export default ComponentA
