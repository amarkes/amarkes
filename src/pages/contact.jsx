"use client";

import React, {useContext} from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';

const ContactPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`mt-5 ml-5 mr-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
            <h2 className="text-[24px] mb-5">Contanto</h2>
            <p className="text-left mb-2">
                <b>E-mail:</b> amarkes.aws@gmail.com
            </p>
            
        </section>
    );
};

export default ContactPage;