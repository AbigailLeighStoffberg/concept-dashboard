import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const initialMessage: Message = {
  id: '1',
  role: 'assistant',
  content: "Hi! I noticed a 15% spike in guests searching for 'Late Night Food' at 11 PM. Would you like me to suggest some local partners or draft a notification for the kitchen?",
  timestamp: new Date(),
};

/**
 * AI Concierge Chat Panel
 */
export function AIChatPanel({ isOpen = true, onClose, className }: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Great choice! I've identified 3 highly-rated late-night restaurants within walking distance. Shall I add them to your recommendations?",
        "Based on your guest data, I recommend partnering with 'Taverna Nights' - they have a 4.8 rating and offer 24-hour delivery. Want me to draft an email?",
        "I can also set up automatic push notifications for guests searching late-night options. This could increase your partner revenue by an estimated 12%.",
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={cn(
      "flex flex-col h-full bg-card rounded-2xl glass overflow-hidden animate-slide-in-right",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-md">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AI Concierge</h3>
            <p className="text-xs text-muted-foreground">Powered by Q-Insight</p>
          </div>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-lg hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 animate-fade-in",
              message.role === 'user' ? 'flex-row-reverse' : ''
            )}
          >
            {/* Avatar */}
            <div className={cn(
              "h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0",
              message.role === 'assistant' 
                ? "bg-gradient-to-br from-accent/20 to-accent/10" 
                : "bg-secondary"
            )}>
              {message.role === 'assistant' ? (
                <Bot className="h-4 w-4 text-accent" />
              ) : (
                <User className="h-4 w-4 text-muted-foreground" />
              )}
            </div>

            {/* Message Bubble */}
            <div className={cn(
              "max-w-[80%] rounded-2xl px-4 py-3",
              message.role === 'assistant' 
                ? "bg-secondary/70 text-foreground rounded-tl-md" 
                : "bg-accent text-white rounded-tr-md"
            )}>
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className={cn(
                "text-[10px] mt-1 block",
                message.role === 'assistant' ? "text-muted-foreground" : "text-white/70"
              )}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 animate-fade-in">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
              <Bot className="h-4 w-4 text-accent" />
            </div>
            <div className="bg-secondary/70 rounded-2xl rounded-tl-md px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-typing" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-typing" style={{ animationDelay: '200ms' }} />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-typing" style={{ animationDelay: '400ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything about your guests..."
            className="flex-1 rounded-xl bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-accent"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            size="icon"
            className="h-10 w-10 rounded-xl bg-accent hover:bg-accent/90 text-white shadow-md"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-2">
          AI suggestions are based on real-time guest data
        </p>
      </div>
    </div>
  );
}