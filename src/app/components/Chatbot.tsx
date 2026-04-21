import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, DollarSign, Users, Heart } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Tesmax Foundation. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { icon: DollarSign, text: "How to donate", color: "bg-[#FF8C00]" },
    { icon: Heart, text: "About our work", color: "bg-[#0066CC]" },
    { icon: Users, text: "Get involved", color: "bg-[#76B82A]" },
    { icon: Phone, text: "Contact us", color: "bg-[#008B8B]" },
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("donate") || lowerMessage.includes("donation") || lowerMessage.includes("contribute")) {
      return "Thank you for your interest in donating! 💝 You can contribute through:\n\n🏦 Bank Transfer:\nFirstBank Gambia Limited\nAccount Name: The Tesmax Foundation\nGMD: 202301000405420\nUSD: 202201000087362\n\n📱 Wave Money: +220 3796486\n\nEvery contribution helps us feed widows and families in need!";
    }

    if (lowerMessage.includes("about") || lowerMessage.includes("mission") || lowerMessage.includes("work")) {
      return "Tesmax Foundation is dedicated to restoring hope and dignity to the most vulnerable in Gambian society. 🌟\n\nWe:\n• Distribute food items (rice, sugar, onions, potatoes)\n• Serve hot meals to the less privileged\n• Support widows and their families\n• Run community outreach programs\n\nOur mission: No widow feels forgotten and no needy person goes to bed hungry. ❤️";
    }

    if (lowerMessage.includes("volunteer") || lowerMessage.includes("involved") || lowerMessage.includes("help") || lowerMessage.includes("participate")) {
      return "We'd love to have you join our mission! 🤝 You can help by:\n\n• Volunteering at food distribution events\n• Sponsoring a widow or family\n• Donating food items\n• Spreading awareness about our work\n\n📞 Call us at +220 3796486 or send us a message on this website to get started!";
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("address") || lowerMessage.includes("location")) {
      return "📍 Location: Kotu Layout, KSMD, The Gambia\n📞 Phone: +220 3796486\n💬 Wave: +220 3796486\n\nFeel free to reach out anytime. We're here to help!";
    }

    if (lowerMessage.includes("wave") || lowerMessage.includes("mobile money")) {
      return "You can send donations via Wave Money to:\n📱 +220 3796486\n\nThis is a quick and convenient way to support our cause! 💝";
    }

    if (lowerMessage.includes("food") || lowerMessage.includes("meal") || lowerMessage.includes("rice")) {
      return "We distribute essential food items including:\n🍚 Bags of rice\n🧂 Sugar\n🧅 Onions\n🥔 Potatoes\n\nWe also serve nutritious cooked lunches to the less privileged. Each meal is more than just food—it's a moment of warmth and human connection! 🍲";
    }

    if (lowerMessage.includes("widow") || lowerMessage.includes("widows")) {
      return "Supporting widows is at the heart of what we do. 💜 Many widows struggle to provide even a single meal for their children. Through our programs, we ensure they have access to:\n\n• Essential food items\n• Hot meals\n• Community support\n• Dignity and hope\n\nNo widow should feel forgotten!";
    }

    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're very welcome! 🙏 Together we can make a difference in the lives of those who need it most. Is there anything else I can help you with?";
    }

    if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
      return "Hello! 👋 I'm here to help you learn about Tesmax Foundation and how you can support our mission. What would you like to know?";
    }

    return "Thank you for your message! 😊 I'm here to help with information about:\n\n• Making donations\n• Our programs and impact\n• Volunteering opportunities\n• Contact information\n\nYou can also call us at +220 3796486 for immediate assistance.";
  };

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleQuickReply = (text: string) => {
    setInputValue(text);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#FF8C00] text-white p-4 rounded-full shadow-2xl hover:bg-[#e67e00] transition-all hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Tesmax Foundation</h3>
                <p className="text-xs text-blue-100">We're here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-wrap ${
                    message.sender === "user"
                      ? "bg-[#FF8C00] text-white rounded-br-none"
                      : "bg-gray-100 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user" ? "text-orange-100" : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Quick options:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, index) => {
                  const Icon = reply.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply.text)}
                      className={`${reply.color} text-white p-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1`}
                    >
                      <Icon className="w-3 h-3" />
                      {reply.text}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
              />
              <button
                onClick={handleSend}
                className="bg-[#FF8C00] text-white p-2 rounded-full hover:bg-[#e67e00] transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
