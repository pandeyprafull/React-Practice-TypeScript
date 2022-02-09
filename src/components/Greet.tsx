type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name}!! You Have ${props.messageCount} Unread messages` : `Welcome Guest`
                }
            </h2>

        </div>
    )
}

