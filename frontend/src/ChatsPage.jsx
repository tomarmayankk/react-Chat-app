import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId="b10065a8-f22e-4da3-bc27-4a6713bbdf08"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
            />
        </div>
    )
}
export default ChatsPage