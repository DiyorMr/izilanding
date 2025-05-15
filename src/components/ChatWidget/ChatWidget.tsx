import React, { useState } from "react";
import "./ChatWidget.scss";
import { Bot, Send } from "lucide-react";

const ChatWidget = () => {
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hello there! I'm your IZIISH assistant. How can I help you today?" },
        { role: "user", text: "I'm looking for information about your pricing plans." },
        { role: "bot", text: "Sure thing! We offer flexible plans starting from $29/month. Would you like me to share more details about specific features in each plan?" }
    ]);

    const [input, setInput] = useState("");

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const newMessages = [...messages, { role: "user", text: trimmed }];
        setMessages(newMessages);
        setInput("");

        // Fake bot reply
        setTimeout(() => {
            setMessages(prev => [...prev, { role: "bot", text: "Thanks for your message! We'll get back to you shortly." }]);
        }, 800);
    };

    return (
        <div className="chat_widget">
            <div className="chat_header">
                <div className="chat_bot_icon">
                    <Bot className="icon_bot" />
                </div>
                <div className="chat_info">
                    <p className="chat_info_title">IZI Ish Assistant</p>
                    <p>Online Now</p>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`message ${msg.role}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="chat_input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <button onClick={handleSend}>
                    <Send className="navigation_icon" />
                </button>
            </div>
        </div>
    );
};

export default ChatWidget;
