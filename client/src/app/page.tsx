"use client";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Aca iran los mensajes */}
      <div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10">
              <Image
                className="rounded-full"
                alt="user"
                src="https://randomuser.me/api/portraits/lego/5.jpg"
                fill
              />
            </div>
          </div>
          <div className="chat-bubble">
            It was said that you would, destroy the Sith, not join them.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 ">
              <Image
                className="rounded-full"
                alt="user"
                src="https://randomuser.me/api/portraits/lego/5.jpg"
                fill
              />
            </div>
          </div>
          <div className="chat-bubble">
            It was you who would bring balance to the Force
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 ">
              <Image
                className="rounded-full"
                alt="bot"
                src="https://randomuser.me/api/portraits/lego/1.jpg"
                fill
              />
            </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
        </div>
      </div>
      {/* Aca ira la entrada de texto */}
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-2"
        >
          <textarea
            className="textarea textarea-info"
            placeholder="Escribe aquí..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-outline btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
