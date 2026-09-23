import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setError(false);

    const token = import.meta.env.VITE_TELEGRAM_TOKEN || '7862323928:AAHC4GzugsCpbaxDlSkqrLXbKBf3HmyZGfI';
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '281235630';

    const messageText = 
      `🚀 <b>Novo contato recebido do Portfólio!</b>\n\n` +
      `👤 <b>Nome:</b> ${formData.name}\n` +
      `📧 <b>Email:</b> ${formData.email}\n` +
      `📱 <b>WhatsApp:</b> ${formData.whatsapp ? formData.whatsapp : 'Não informado'}\n\n` +
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
                <label className="font-label-sm text-xs text-text-dim">Email para Resposta *</label>
                <input 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-base text-text-primary placeholder:text-text-dim text-sm outline-none focus:ring-1 focus:ring-primary border border-border-glass transition-all" 
                  placeholder="seu-email@dominio.com" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-xs text-text-dim">WhatsApp / Telefone</label>
                <input 
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-base text-text-primary placeholder:text-text-dim text-sm outline-none focus:ring-1 focus:ring-primary border border-border-glass transition-all" 
                  placeholder="(11) 99999-9999" 
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
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
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
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
