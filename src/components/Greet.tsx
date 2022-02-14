import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number,
    isloggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {
                    props.isloggedIn
                        ? ` Welcome ${props.name} !! you have ${messageCount} unread messages`
                        : `Welcome Guest`
                }
            </h2>
        </div>
    )
}
