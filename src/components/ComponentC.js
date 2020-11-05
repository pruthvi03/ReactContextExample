import React from 'react'
import { NameContext } from '../App'
import { ColorContext } from '../App'
const ComponentC = () => {
    return (
        <div>
            <div>ComponentC</div>
            <NameContext.Consumer>
                {
                    name => {
                        return (
                            <ColorContext.Consumer>
                                {
                                    color => {
                                        return (
                                            <div>
                                                Name: {name} Color: {color}
                                            </div>
                                        )
                                    }
                                }
                            </ColorContext.Consumer>
                        )
                    }
                }
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC
