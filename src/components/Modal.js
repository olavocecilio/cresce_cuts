"use client"

import Image from 'next/image'

import React, { useState, useEffect } from "react"
import WhiteButton from './WhiteButton';
import BlueButton from './BlueButton';

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    const [descontos, setDescontos] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/descontos?id=1', {
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
            {descontos.length > 0 && descontos.map((desconto) => (
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
                    <div className='w-[659px]'>
                        <div className='bg-white rounded-sm'>
                            <div className='h-20 flex items-center justify-center border-1 border-b border-blue p-4'>
                                <p className='text-base text-gray1 font-bold'>Detalhes do desconto</p>
                                <button className='relative -right-[225px] -top-[20px]' onClick={() => onClose()}>
                                    <Image src="/close.svg" width={32} height={32} alt="Fechar" />
                                </button>
                            </div>
                            <div className='flex p-6'>
                                <div className='w-6/12'>
                                    <img src={desconto.imagem} width="250" height="250" alt={desconto.nome} />
                                </div>
                                <div className='w-6/12'>
                                    <p className='text-gray2 text-2xl font-medium'>{desconto.porcento} OFF</p>
                                    <p className='text-gray2 text-lg font-normal'>{desconto.nome}</p>
                                    <p className='text-gray2 text-sm font-normal my-4'>{desconto.descricao}</p>
                                    <p className='text-gray2 text-2xl font-medium'>R$ {(desconto.valor * (desconto.porcento / 100))}</p>
                                    <p className='text-gray2 text-2xl font-medium'>R$ {desconto.valor}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-beteween p-6'>
                                <div className='w-6/12 mr-2'>
                                    <WhiteButton href="./" text="Editar" />
                                </div>
                                <div className='w-6/12 ml-2'>
                                    <BlueButton href="./" text="Fechar" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Modal