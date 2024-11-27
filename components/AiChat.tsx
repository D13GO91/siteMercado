"use client";

import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const INITIAL_MESSAGE = "Olá! Sou o assistente virtual do SuperMart. Como posso ajudar você hoje?";

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: INITIAL_MESSAGE,
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateAiResponse = async (userMessage: string) => {
    setIsTyping(true);

    // Simular tempo de resposta
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const responses = [
      "Posso ajudar você a encontrar os melhores produtos em nossa loja!",
      "Temos várias promoções disponíveis nas categorias que você procura.",
      "Que tal experimentar nossos produtos frescos? Temos excelentes opções!",
      "Posso auxiliar você com informações sobre preços e disponibilidade.",
    ];

    const randomResponse = responses.length
      ? responses[Math.floor(Math.random() * responses.length)]
      : "Desculpe, estou com dificuldades técnicas no momento.";

    setIsTyping(false);

    return randomResponse;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: new Date().getTime(),
      text: inputMessage,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    const aiResponse = await simulateAiResponse(inputMessage);

    const botMessage: Message = {
      id: new Date().getTime() + 1,
      text: aiResponse,
      isBot: true,
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-96 h-[500px] flex flex-col shadow-lg animate-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 border-b flex items-center gap-3 bg-primary text-primary-foreground rounded-t-lg">
            <Avatar className="h-10 w-10 border-2 border-primary-foreground">
              <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
              <AvatarFallback>
                <Bot className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">Assistente SuperMart</h3>
              <p className="text-sm opacity-90">Sempre online</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  {message.isBot && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.isBot
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2">
                    Digitando...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isTyping || !inputMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
}
