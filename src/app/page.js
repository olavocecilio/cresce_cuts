"use client";
import React, { useState } from "react"

import Top from '../components/Top'
import CardLista from '../components/card/CardLista'


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center w-full p-6 bg-bg1">
      <Top title="Lista de descontos" subtitle="Loja: Super João - Nova loja online" />
      <CardLista />
    </div>
  );
}
