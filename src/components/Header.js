"use client";
import { useEffect, useState } from 'react'
import Link from "next/link";

export default function Header() {

    const [currentRoute, setCurrentRoute] = useState('about')

    const scrollToSection = (event) => {
        event.preventDefault();

        // Get the target section's offset top position
        const section = document.querySelector(event.target.getAttribute('href'));

        let sectionTop = ''

        if (section.id === 'skills') {
            sectionTop = section.offsetTop - 196;
        } else {
            sectionTop = section.offsetTop
        }

        // Scroll smoothly to the section
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    current = section;
                }
            });

            setCurrentRoute(current.id);


        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className=" h-24 fixed top-0 left-0 right-0 z-50 bg-primary ">
            <div className="ms-container flex justify-between items-center h-24">

                <Link href={'/'}>
                    <img src="/static/logo-light.png" alt="logo" className="h-[60px] border border-secondary rounded p-1" />
                </Link>

                <ul className="flex items-center gap-x-3 text-xs text-secondary font-semibold uppercase ">
                    <li>
                        <Link onClick={(e) => scrollToSection(e)} href={'#about'} className={currentRoute === 'about' ? 'border-b border-secondary' : null}>home</Link>
                    </li>

                    <li>
                        <Link onClick={(e) => scrollToSection(e)} href={'#skills'} className={currentRoute === 'skills' ? 'border-b border-secondary' : null}>Skills</Link>
                    </li>

                    <li>
                        <Link onClick={(e) => scrollToSection(e)} href={'#formation'} className={currentRoute === 'formation' ? 'border-b border-secondary' : null}>Formation</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}