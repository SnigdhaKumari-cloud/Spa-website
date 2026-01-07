export default function LiveChat(): JSX.Element {
    const handleClick = (): void => {
        alert('Live chat feature - connect your preferred chat service (Intercom, Zendesk, Tidio, etc.)');
    };

    return (
        <div className="live-chat-widget">
            <div className="chat-bubble" onClick={handleClick}>
                <i className="fas fa-comments"></i>
                <div>
                    <span style={{ fontWeight: 600 }}>Chat with us</span>
                    <div className="chat-status">
                        <span className="chat-status-dot"></span>
                        <span>We're online</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
