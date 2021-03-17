import React from 'react'
import './Footer.css'

interface Props {
    title: string,
    copyright: string
}

export const Footer: React.FC<Props> = ({ title, copyright }) => {
    return (
        <footer className="myfooter bg-dark text-light text-end">
            <div className="text-end">
                {title} {copyright}
            </div>
        </footer>
    )
}