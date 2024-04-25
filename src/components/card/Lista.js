"use client"

import Image from 'next/image'

import React, { useState, useEffect } from "react"
import Modal from '../Modal'

function Lista() {
    const [descontos, setDescontos] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        fetch('http://localhost:5000/descontos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setDescontos(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
        <ul>
            {descontos.length > 0 && descontos.map((desconto) => (
                <li className="text-gray2 text-sm w-full h-[100px] flex items-center justify-between px-6 border-t border-gray3">
                    <div className="w-[30%] flex justify-beteween items-center">
                        <Image className="mx-2" src="/frame.svg" width={9} height={12.6} alt="Frame" />
                        <img className="mx-2" src={desconto.imagem} width="50" height="50" alt={desconto.nome} />
                        <p className="mx-2">{desconto.nome}</p>
                    </div>
                    <div className="w-[15%]">{desconto.tipo.nome}</div>
                    <div className="w-[15%]">{desconto.ativacao}</div>
                    <div className="w-[30%]">{desconto.inativacao}</div>
                    <div className="w-[10%] flex justify-around items-center">
                        <Image src="/status-active.svg" width={28} height={16} alt="Status Ativo" />
                        <button onClick={() => setShowModal(true)}>
                            <Image src="/eye.svg" width={28} height={28} alt="Ver mais" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

export default Lista
