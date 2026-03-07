"use client";

import { useState } from "react";

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input) return;

        const userMessage = { role: "user", text: input };
        setMessages([...messages, userMessage]);

        const res = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ message: input })
        });

        const data = await res.json();

        setMessages(m => [
            ...m,
            { role: "assistant", text: data.reply }
        ]);

        setInput("");
    };

    return (
        <div className="chatbot">

            <button
                className="chatbot-button"
                onClick={() => setOpen(!open)}
            >
                💬
            </button>

            {open && (
                <div className="chat-window">

                    <div className="chat-messages">
                        {messages.map((m, i) => (
                            <div key={i} className={m.role}>
                                {m.text}
                            </div>
                        ))}
                    </div>

                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ask anything about me..."
                    />

                    <button onClick={sendMessage}>
                        Send
                    </button>

                </div>
            )}

        </div>
    );
}