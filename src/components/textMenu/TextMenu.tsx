import Link, { LinkProps } from "next/link";
import React from "react";

interface TextLinksProps extends LinkProps {
    texto: string,
    href: string,
    icon?: React.ReactNode,
    textname?: string
}

export default function TextMenu({ texto, href, icon, ...rest}: TextLinksProps) {
    return (
        <>
        <Link className="flex items-center space-x-2 text-gray-600 hover:text-gray-800" href={href} {...rest}>
            {icon && <span>{icon}</span>}
        <div>
            <span>{texto}</span>
        </div>
        </Link>
        </>
    )
}