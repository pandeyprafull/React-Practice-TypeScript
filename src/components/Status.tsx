import React from 'react'
type StatusProps = {
    status: 'loading' | 'error' | 'success'
}
export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
        message = `Loading`
    } else if (props.status === 'success') {
        message = 'Data fetched Successfully'
    } else if (props.status === 'error') {
        message = `Error while fetching the data`
    }
    return (
        <div>
            <h2>Status ---- {message}</h2>
        </div>
    )
}
