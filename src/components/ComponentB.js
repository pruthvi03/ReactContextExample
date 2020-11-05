import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { NameContext, ColorContext } from '../App'
export const Back2app = React.createContext()
const ComponentB = (props) => {
    console.log('component b props................', props.title);
    
    const name = useContext(NameContext)
    const color = useContext(ColorContext)
    return (
        <div>
            <div>ComponentB</div>
            <div>Name: {name} Color: {color}</div>
            <ComponentC />
        </div>
    )
}

export default ComponentB
