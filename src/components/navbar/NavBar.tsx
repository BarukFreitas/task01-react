import React from "react";
import TextMenu from "../textMenu/TextMenu";

import {
    FaHome,
    FaInfoCircle,
    FaConciergeBell,
    FaEnvelope,
  } from "react-icons/fa";

import { MdCollections } from "react-icons/md";

export default function NavBar() {
    return (
        <>
        <nav className="flex justify-center">
            <div className="flex gap-3">
                <TextMenu texto="Home" href="/" icon={<FaHome />} />
                <TextMenu texto="Sobre" href="/sobre" icon={<FaInfoCircle />} />
                <TextMenu texto="Dicas" href="/dicas" icon={<FaConciergeBell />} />
                <TextMenu texto="Contato" href="/contato" icon={<FaEnvelope />} />
                <TextMenu texto="Galeria" href="/galeria" icon={<MdCollections />} />
            </div>
        </nav>
        </>
    )
}