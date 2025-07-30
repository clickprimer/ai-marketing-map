import { useState, useEffect, useRef } from 'react';
import { generatePDF } from '../utils/generatePDF';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `Hello and welcome!

This quick, interactive consultation will help you uncover where your trade business may be leaking leads or leaving money on the table—and how to fix it.

**You’ll get a personalized AI Marketing Map with:**

✅ Your strengths
🚧 Missed opportunities
🛠️ Clear action steps
💡 Tools and services that match your goals

It only takes a few minutes, and you’re free to skip or expand on answers as you go. So let’s get started!

**First, what’s your name?**

⬇️ Type below to answer.`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState(null);
  const chatEndRef = useRef(null);
  const latestAssistantRef = useRef(null);
  const [leadInfo, setLeadInfo] = useState({ name: '' });
  const [scrollTargetIndex, setScrollTargetIndex] = useState(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (scrollTargetIndex !== null) {
      latestAssistantRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setScrollTargetIndex(null);
    }
  }, [messages, scrollTargetIndex]);

  useEffect(() => {
    if (loading) scrollToBottom();
  }, [loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    if (!leadInfo.name) {
      const nameOnly = input.replace(/[^a-zA-Z\s]/g, '').split(' ')[0];
      setLeadInfo({ name: nameOnly });
    }

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ threadId, userMessage: input })
    });

    const data = await res.json();
    setThreadId(data.threadId);

    const finalReply = { role: 'assistant', content: data.reply };

    const includesCTA =
      data.reply.includes('Your ClickPrimer Matched Offers') ||
      data.reply.includes('Let’s Get Started');

    const ctaMessage = {
      role: 'assistant',
      content: `
---

### 🚀 Let's Get Started:

- [📞 Book a Service Setup Call](https://www.map.clickprimer.com/aimm-setup-call)
- [📄 Download Your AI Marketing Map PDF](#download)

### ❓ Still have questions? We're happy to help:

- [💬 Send Us a Message](https://www.clickprimer.com/contact)
- [📱 Call Us (We pickup!)](tel:12083144088)`
    };

    const updatedMessages = includesCTA
      ? [...messages, userMessage, finalReply, ctaMessage]
      : [...messages, userMessage, finalReply];

    const newIndex = includesCTA ? updatedMessages.length - 2 : updatedMessages.length - 1;
    setMessages(updatedMessages);
    setScrollTargetIndex(newIndex);
    setLoading(false);
  };

  return (
    <div style={{
      fontFamily: 'Open Sans, sans-serif',
      width: '100vw',
      height: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#e8eeff',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', width: '95%', maxWidth: 700 }}>
        <img src="/logo.png" alt="ClickPrimer Logo" style={{ width: '150px', marginBottom: 10 }} />
        <h1 style={{ color: '#0068ff', fontSize: '1.5rem', marginTop: 0 }}>The Contractor’s AI Marketing Map</h1>
        <p style={{ fontWeight: 'bold', color: '#002654', marginBottom: 30, paddingLeft: 10, paddingRight: 10 }}>
          🚧 This is an interactive consultation for contractors by ClickPrimer. 🚧
        </p>
      </div>

      <div style={{
        background: 'white',
        padding: 20,
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width: '95%',
        maxWidth: 700,
        flexGrow: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }}>
        {messages.map((msg, i) => {
          const isScrollTarget = i === scrollTargetIndex && msg.role === 'assistant';
          return (
            <div
              key={i}
              ref={isScrollTarget ? latestAssistantRef : null}
              style={{
                background: msg.role === 'user' ? '#d2e9ff' : '#f1f1f1',
                margin: '10px 0',
                padding: '10px 15px',
                borderRadius: '10px',
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                textAlign: msg.role === 'user' ? 'right' : 'left'
              }}
            >
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => {
                    let style = buttonStyle('#30d64f', 'white');
                    if (href.includes('pdf') || href === '#download') style = buttonStyle('#00aaff', 'white');
                    if (href.includes('call') && href.startsWith('tel')) style = buttonStyle('#002654', 'white');
                    if (href.includes('contact')) style = buttonStyle('#0068ff', 'white');

                    return href === '#download' ? (
                      <button onClick={() => generatePDF({ ...leadInfo, result: messages.map(m => m.content).join('\n\n') })} style={style}>
                        {children}
                      </button>
