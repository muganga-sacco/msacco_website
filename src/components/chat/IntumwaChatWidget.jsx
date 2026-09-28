import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Copy,
  MessageCircle,
  Mic,
  Minus,
  MoreHorizontal,
  Paperclip,
  Send,
  ThumbsDown,
  ThumbsUp,
  X,
} from "lucide-react";
import { createChatSessionId, sendIntumwaMessage } from "../../services/intumwa";
import "../../styles/intumwa-chat.css";

const LANGUAGE_OPTIONS = [
  { id: "en", label: "English" },
  { id: "rw", label: "Kinyarwanda" },
  { id: "fr", label: "French" },
];

const WELCOME_BY_LANG = {
  en: "Welcome to INTUMWA, Muganga SACCO's virtual assistant. How can we help you today?",
  rw: "Murakaza neza kuri INTUMWA, umufasha wa Muganga SACCO. Twagufasha dute?",
  fr: "Bienvenue sur INTUMWA, l'assistant virtuel de Muganga SACCO. Comment pouvons-nous vous aider?",
};

const MAIN_MENU = [
  { id: "complaint-new", label: "New complaint" },
  { id: "complaint-status", label: "Complaint status" },
  { id: "complaint-escalate", label: "Escalate complaint" },
  { id: "feedback", label: "Submit feedback" },
];

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function nextId() {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function buildInitialMessages() {
  const now = new Date();
  return [
    {
      id: nextId(),
      role: "bot",
      text: "Please select a language to get started/ Hitamo ururimi kugira ngo dutangire/ Veuillez sélectionner une langue pour commencer.",
      timestamp: now,
      showAvatar: true,
      quickReplies: LANGUAGE_OPTIONS,
    },
  ];
}

function BotAvatar() {
  return (
    <div className="intumwa-msg-avatar" aria-hidden>
      <MessageCircle size={14} strokeWidth={2.2} />
    </div>
  );
}

function MessageRow({ message, onQuickReply, onCopy }) {
  const isBot = message.role === "bot";

  return (
    <div className={`intumwa-msg-row ${isBot ? "" : "intumwa-msg-row--user"}`}>
      {isBot ? (
        message.showAvatar ? <BotAvatar /> : <div className="intumwa-msg-avatar intumwa-msg-avatar--spacer" aria-hidden />
      ) : null}

      <div className="intumwa-msg-block">
        {message.text ? (
          <div className={`intumwa-bubble intumwa-bubble--${isBot ? "bot" : "user"}`}>{message.text}</div>
        ) : null}

        {isBot && message.text ? (
          <div className="intumwa-msg-meta">
            <div className="intumwa-msg-actions">
              <button type="button" className="intumwa-msg-action" aria-label="Helpful">
                <ThumbsUp size={14} />
              </button>
              <button type="button" className="intumwa-msg-action" aria-label="Not helpful">
                <ThumbsDown size={14} />
              </button>
              <button
                type="button"
                className="intumwa-msg-action"
                aria-label="Copy message"
                onClick={() => onCopy(message.text)}
              >
                <Copy size={14} />
              </button>
            </div>
            <span>{formatTime(message.timestamp)}</span>
          </div>
        ) : !isBot ? (
          <div className="intumwa-msg-meta">
            <span>{formatTime(message.timestamp)}</span>
          </div>
        ) : null}

        {message.quickReplies?.length ? (
          <div
            className={`intumwa-quick-replies ${
              message.quickReplies.length === 1 ? "intumwa-quick-replies--single" : ""
            }`}
          >
            {message.quickReplies.map((item) => (
              <button
                key={item.id}
                type="button"
                className="intumwa-quick-btn"
                onClick={() => onQuickReply(item)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function IntumwaChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState(buildInitialMessages);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState(null);
  const [sessionId] = useState(createChatSessionId);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (open && !minimized) scrollToBottom();
  }, [messages, typing, open, minimized, scrollToBottom]);

  useEffect(() => {
    if (open && !minimized) inputRef.current?.focus();
  }, [open, minimized]);

  const appendMessages = (...items) => {
    setMessages((prev) => [...prev, ...items]);
  };

  const handleLanguageSelect = (option) => {
    const now = new Date();
    setLanguage(option.id);

    appendMessages(
      {
        id: nextId(),
        role: "user",
        text: option.label,
        timestamp: now,
      },
      {
        id: nextId(),
        role: "bot",
        text: WELCOME_BY_LANG[option.id] || WELCOME_BY_LANG.en,
        timestamp: new Date(now.getTime() + 1),
        showAvatar: true,
        quickReplies: MAIN_MENU,
      }
    );
  };

  const handleMainMenu = async (item) => {
    const now = new Date();
    appendMessages({
      id: nextId(),
      role: "user",
      text: item.label,
      timestamp: now,
    });

    setTyping(true);
    try {
      const response = await sendIntumwaMessage({
        message: item.label,
        sessionId,
        language: language || "en",
      });
      appendMessages({
        id: nextId(),
        role: "bot",
        text: response.reply,
        timestamp: new Date(),
        showAvatar: true,
        quickReplies: response.quickReplies,
      });
    } catch {
      appendMessages({
        id: nextId(),
        role: "bot",
        text: "Sorry, we could not reach INTUMWA right now. Please try again or contact us at 0788124500.",
        timestamp: new Date(),
        showAvatar: true,
      });
    } finally {
      setTyping(false);
    }
  };

  const handleQuickReply = (item) => {
    if (!language && LANGUAGE_OPTIONS.some((l) => l.id === item.id)) {
      handleLanguageSelect(item);
      return;
    }
    handleMainMenu(item);
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || typing) return;

    setInput("");
    const now = new Date();
    appendMessages({
      id: nextId(),
      role: "user",
      text: trimmed,
      timestamp: now,
    });

    if (!language) {
      appendMessages({
        id: nextId(),
        role: "bot",
        text: "Please choose a language using the buttons above to continue.",
        timestamp: new Date(),
        showAvatar: true,
        quickReplies: LANGUAGE_OPTIONS,
      });
      return;
    }

    setTyping(true);
    try {
      const response = await sendIntumwaMessage({
        message: trimmed,
        sessionId,
        language,
      });
      appendMessages({
        id: nextId(),
        role: "bot",
        text: response.reply,
        timestamp: new Date(),
        showAvatar: true,
        quickReplies: response.quickReplies,
      });
    } catch {
      appendMessages({
        id: nextId(),
        role: "bot",
        text: "Something went wrong. Please try again later.",
        timestamp: new Date(),
        showAvatar: true,
      });
    } finally {
      setTyping(false);
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleClose = () => {
    setOpen(false);
    setMinimized(false);
  };

  const handleBack = () => {
    setMessages(buildInitialMessages());
    setLanguage(null);
    setInput("");
  };

  if (!open) {
    return (
      <button
        type="button"
        className="intumwa-fab"
        aria-label="Open INTUMWA chat"
        onClick={() => setOpen(true)}
      >
        <MessageCircle size={26} strokeWidth={2} />
      </button>
    );
  }

  return (
    <div
      className={`intumwa-panel ${minimized ? "intumwa-panel--minimized" : ""}`}
      role="dialog"
      aria-label="INTUMWA chat"
    >
      <header className="intumwa-header">
        <button type="button" className="intumwa-header-back" aria-label="Restart conversation" onClick={handleBack}>
          <ArrowLeft size={20} />
        </button>
        <div className="intumwa-header-avatar">
          <img src="/mugangaSaccoLogo.jpg" alt="" />
        </div>
        <div className="intumwa-header-info">
          <div className="intumwa-header-title">INTUMWA · Muganga SACCO</div>
          <div className="intumwa-header-subtitle">Replies immediately</div>
        </div>
        <div className="intumwa-header-actions">
          <button type="button" className="intumwa-header-btn" aria-label="More options">
            <MoreHorizontal size={18} />
          </button>
          <button
            type="button"
            className="intumwa-header-btn"
            aria-label={minimized ? "Expand chat" : "Minimize chat"}
            onClick={() => setMinimized((m) => !m)}
          >
            <Minus size={18} />
          </button>
          <button type="button" className="intumwa-header-btn" aria-label="Close chat" onClick={handleClose}>
            <X size={18} />
          </button>
        </div>
      </header>

      {!minimized && (
        <>
          <div className="intumwa-messages">
            {messages.map((msg) => (
              <MessageRow key={msg.id} message={msg} onQuickReply={handleQuickReply} onCopy={handleCopy} />
            ))}
            {typing ? (
              <div className="intumwa-msg-row">
                <BotAvatar />
                <div className="intumwa-typing" aria-label="Assistant is typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          <div className="intumwa-composer">
            <button
              type="button"
              className="intumwa-composer-mic"
              aria-label="Voice input"
              title="Voice input — coming with INTUMWA integration"
            >
              <Mic size={18} />
            </button>
            <div className="intumwa-composer-input-wrap">
              <input
                ref={inputRef}
                type="text"
                className="intumwa-composer-input"
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                aria-label="Message"
              />
              <button
                type="button"
                className="intumwa-composer-attach"
                aria-label="Attach file"
                title="Attachments — coming with INTUMWA integration"
              >
                <Paperclip size={18} />
              </button>
            </div>
            <button
              type="button"
              className="intumwa-composer-send"
              aria-label="Send message"
              disabled={!input.trim() || typing}
              onClick={handleSend}
            >
              <Send size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
