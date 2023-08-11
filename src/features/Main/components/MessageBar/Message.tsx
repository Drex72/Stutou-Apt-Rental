import './MessageBarStyles.scss'
interface IMessage {
    text: string
    type: 'sender' | 'receiver',
    time: string
    name: string
}

const Message = (props: IMessage) => {
    const { text, type, name, time } = props
    return (
        <div className={`msg ${type}`}>
            <div className="msg-bubble">
                <div className="msg-info">
                    <h2 className="msg-info-name">{name}</h2>
                    <div className="msg-info-time">{time}</div>
                </div>

                <div className="msg-text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Message