import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
  };

  const validatePhone = (phone) => {
    if (!phone || !phone.trim()) return false;
    if (phone.startsWith('+55')) {
      const digits = phone.replace(/\D/g, '');
      // 55 + DDD (2) + 8 ou 9 dígitos = 12 ou 13 dígitos
      return digits.length >= 12 && digits.length <= 13;
    }
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 7;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cooldown > 0) return;
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.message) return;

    let hasError = false;

    if (!validateEmail(formData.email)) {
      setEmailTouched(true);
      setEmailError('E-mail inválido');
      hasError = true;
    }

    if (!validatePhone(formData.whatsapp)) {
      setPhoneTouched(true);
      setPhoneError('Telefone inválido');
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);
    setError(false);
    setEmailError('');
    setPhoneError('');

    const token = import.meta.env.VITE_TELEGRAM_TOKEN || '7862323928:AAHC4GzugsCpbaxDlSkqrLXbKBf3HmyZGfI';
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '281235630';

    const messageText = 
      `🚀 <b>Novo contato recebido do Portfólio!</b>\n\n` +
      `👤 <b>Nome:</b> ${formData.name}\n` +
      `📧 <b>Email:</b> ${formData.email}\n` +
      `📱 <b>WhatsApp:</b> ${formData.whatsapp}\n\n` +
      `📝 <b>Mensagem:</b>\n${formData.message}\n\n` +
      `🕒 <i>Enviado em ${new Date().toLocaleString('pt-BR')}</i>`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', whatsapp: '', message: '' });
        setEmailTouched(false);
        setEmailError('');
        setPhoneTouched(false);
        setPhoneError('');
        setCooldown(60); // 1 minuto de cooldown anti-spam
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;

    if (!val) {
      setFormData((prev) => ({ ...prev, whatsapp: '' }));
      if (phoneTouched) setPhoneError('Informe seu telefone/WhatsApp');
      return;
    }

    // Se começa com '+' e não é '+55', ou é apenas '+', trata como internacional livre
    if (val === '+' || (val.startsWith('+') && !val.startsWith('+55'))) {
      const cleaned = val.replace(/[^\d\s\-\(\)\+]/g, '');
      setFormData((prev) => ({ ...prev, whatsapp: cleaned }));
      if (phoneTouched) {
        if (!validatePhone(cleaned)) {
          setPhoneError('Telefone inválido');
        } else {
          setPhoneError('');
        }
      }
      return;
    }

    // Formatação Brasil (+55)
    let digits = val.replace(/\D/g, '');

    // Permite apagar completamente
    if (val === '+5' || val === '+55' || digits === '55' || digits === '5' || digits === '') {
      if (val.startsWith('+55') && digits === '55' && val.length <= 4) {
        setFormData((prev) => ({ ...prev, whatsapp: '+55 ' }));
        if (phoneTouched) setPhoneError('Informe seu telefone/WhatsApp');
        return;
      }
      setFormData((prev) => ({ ...prev, whatsapp: val }));
      if (phoneTouched) setPhoneError('Informe seu telefone/WhatsApp');
      return;
    }

    // Adiciona 55 caso não tenha
    if (!digits.startsWith('55')) {
      digits = '55' + digits;
    }

    // Limita a 13 dígitos (+55 + DDD de 2 dígitos + número de até 9 dígitos)
    digits = digits.slice(0, 13);

    let formatted = '+55';
    const ddd = digits.slice(2, 4);
    const rest = digits.slice(4);

    if (ddd) {
      formatted += ` (${ddd}`;
      if (ddd.length === 2) {
        formatted += ') ';
      }
    }

    if (rest) {
      if (rest.length <= 4) {
        formatted += rest;
      } else if (rest.length <= 8) {
        formatted += `${rest.slice(0, 4)}-${rest.slice(4)}`;
      } else {
        formatted += `${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
      }
    }

    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    if (phoneTouched) {
      if (!validatePhone(formatted)) {
        setPhoneError('Telefone incompleto');
      } else {
        setPhoneError('');
      }
    }
  };

  return (
    <section className="py-8 sm:py-space-xl pb-margin" id="contato">
      <div className="relative rounded-3xl bg-surface-container-low p-5 sm:p-space-lg md:p-margin shadow-2xl overflow-hidden border border-border-glass">
        {/* Ambient Inner Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-container/20 blur-[90px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-lg items-center relative z-10">
          {/* Text and Headline */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-space-sm">
            <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
              Vamos Conectar
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-headline-lg lg:text-display-hero text-text-primary font-bold tracking-tight leading-tight">
              Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">incrível juntos?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-body-lg text-text-muted max-w-xl leading-relaxed">
              Seja para projetar uma arquitetura escalável do zero, liderar um produto full-stack ou fortalecer seu time de engenharia técnica, estou à disposição para conversar.
            </p>

            {/* Channels direct links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-4">
              <a 
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-colors border border-border-glass text-on-surface" 
                href="https://github.com/amarkes" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">code</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] text-text-dim">GitHub Profile</span>
                  <span className="text-xs sm:text-sm font-medium text-text-primary">github.com/amarkes</span>
                </div>
              </a>

              <a 
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-colors border border-border-glass text-on-surface" 
                href="https://www.linkedin.com/in/antonio-marques-1209ab376/" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">link</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] text-text-dim">LinkedIn Profile</span>
                  <span className="text-xs sm:text-sm font-medium text-text-primary">linkedin.com/in/antonio-marques</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Contact Action Box */}
          <div className="lg:col-span-5 flex flex-col gap-4 p-4 sm:p-space-lg rounded-2xl bg-surface-container-lowest shadow-inner border border-border-glass">
            <div className="flex items-center justify-between pb-1 border-b border-border-glass">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm sm:text-base text-text-primary font-bold">Mensagem Rápida</span>
              </div>
              <span className="font-label-sm text-[11px] text-text-dim">Notificação Direta</span>
            </div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-xs text-text-dim">Seu Nome ou Empresa *</label>
                <input 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-base text-text-primary placeholder:text-text-dim text-sm outline-none focus:ring-1 focus:ring-primary border border-border-glass transition-all" 
                  placeholder="Ex.: Lucas Mendes • Startup X" 
                  required 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <label className="font-label-sm text-xs text-text-dim">Email para Resposta *</label>
                  {emailError && (
                    <span className="text-[11px] text-red-400 font-medium animate-fade-in">
                      {emailError}
                    </span>
                  )}
                </div>
                <input 
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-surface-base text-text-primary placeholder:text-text-dim text-sm outline-none transition-all border ${
                    emailError 
                      ? 'border-red-500/70 focus:ring-1 focus:ring-red-500' 
                      : 'border-border-glass focus:ring-1 focus:ring-primary'
                  }`}
                  placeholder="seu-email@dominio.com" 
                  required 
                  type="email"
                  value={formData.email}
                  onBlur={() => {
                    setEmailTouched(true);
                    if (formData.email && !validateEmail(formData.email)) {
                      setEmailError('E-mail inválido');
                    } else {
                      setEmailError('');
                    }
                  }}
                  onChange={(e) => {
                    const val = e.target.value;
                    setFormData({ ...formData, email: val });
                    if (emailTouched) {
                      if (val && !validateEmail(val)) {
                        setEmailError('E-mail inválido');
                      } else {
                        setEmailError('');
                      }
                    }
                  }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <label className="font-label-sm text-xs text-text-dim">WhatsApp / Telefone *</label>
                  {phoneError && (
                    <span className="text-[11px] text-red-400 font-medium animate-fade-in">
                      {phoneError}
                    </span>
                  )}
                </div>
                <input 
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-surface-base text-text-primary placeholder:text-text-dim text-sm outline-none transition-all border ${
                    phoneError 
                      ? 'border-red-500/70 focus:ring-1 focus:ring-red-500' 
                      : 'border-border-glass focus:ring-1 focus:ring-primary'
                  }`}
                  placeholder="+55 (11) 99999-9999" 
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onBlur={() => {
                    setPhoneTouched(true);
                    if (!formData.whatsapp || !validatePhone(formData.whatsapp)) {
                      setPhoneError('Telefone inválido');
                    } else {
                      setPhoneError('');
                    }
                  }}
                  onChange={handlePhoneChange}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-xs text-text-dim">Objetivo do Projeto / Proposta *</label>
                <textarea 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-base text-text-primary placeholder:text-text-dim text-sm outline-none focus:ring-1 focus:ring-primary border border-border-glass transition-all resize-none" 
                  placeholder="Fale brevemente sobre o escopo, arquitetura ou desafio pretendido..." 
                  required 
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button 
                className="mt-1 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-container text-on-primary-container font-bold text-sm sm:text-base hover:bg-secondary-container transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={loading || cooldown > 0}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : cooldown > 0 ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-pulse">timer</span>
                    <span>Aguarde {cooldown}s para novo envio</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>

              {submitted && (
                <div className="mt-1 p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-medium text-center">
                  ✓ Mensagem enviada com sucesso para o Telegram! Retornarei em breve.
                </div>
              )}

              {error && (
                <div className="mt-1 p-3 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30 text-xs sm:text-sm font-medium text-center">
                  ✕ Erro ao enviar mensagem. Por favor, tente novamente ou contate via LinkedIn.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
