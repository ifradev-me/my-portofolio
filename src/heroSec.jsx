'use client'

import { useEffect, useState } from "react";
import texture1 from './assets/durve2.png';
import fotoTes from './assets/fototes.jpeg';

const HeroSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    const parallax = (factor) => ({
        transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)`,
        transition: "transform 0.15s ease-out",
    });

    return (
        <section className="relative min-h-screen overflow-hidden bg-background-950">

            {/* Keyframes — hanya animasi yang tidak ada di Tailwind default */}
            <style>{`
                @keyframes h-fadeUp {
                    from { opacity:0; transform:translateY(36px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                @keyframes h-slideLeft {
                    from { opacity:0; transform:translateX(32px); }
                    to   { opacity:1; transform:translateX(0); }
                }
                @keyframes h-floatY {
                    0%,100% { transform: translateY(0px) rotate(-0.8deg); }
                    50%     { transform: translateY(-12px) rotate(0.8deg); }
                }
                @keyframes h-scanline {
                    0%   { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                @keyframes h-borderGlow {
                    0%,100% { border-color: rgba(255,195,0,0.35); }
                    50%     { border-color: rgba(255,195,0,0.85); }
                }
                @keyframes h-countUp {
                    from { opacity:0; transform:translateY(8px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                .h-a1  { animation: h-fadeUp    0.8s cubic-bezier(0.16,1,0.3,1) 0.10s both; }
                .h-a2  { animation: h-fadeUp    0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
                .h-a3  { animation: h-fadeUp    0.8s cubic-bezier(0.16,1,0.3,1) 0.40s both; }
                .h-a4  { animation: h-fadeUp    0.8s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
                .h-a5  { animation: h-fadeUp    0.8s cubic-bezier(0.16,1,0.3,1) 0.70s both; }
                .h-img { animation: h-slideLeft 1.0s cubic-bezier(0.16,1,0.3,1) 0.30s both; }
                .h-float    { animation: h-floatY     6s ease-in-out infinite; }
                .h-scanline { animation: h-scanline   8s linear infinite; }
                .h-bglow    { animation: h-borderGlow 3s ease-in-out infinite; }
                .h-cu1  { animation: h-countUp  0.8s cubic-bezier(0.16,1,0.3,1) 1.0s both; }
                .h-cu2  { animation: h-countUp  0.8s cubic-bezier(0.16,1,0.3,1) 1.2s both; }

                .h-gold-text {
                    background: linear-gradient(135deg, var(--color-primary-gold-300), var(--color-primary-gold-500), var(--color-primary-gold-200));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .h-cta-btn {
                    background: linear-gradient(135deg, #16a34a, #15803d);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .h-cta-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 20px 60px rgba(22,163,74,0.45);
                }
            `}</style>

            {/* Grid background */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Texture parallax */}
            <div
                className="absolute inset-0 scale-110 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${texture1})`, ...parallax(0.3) }}
            />

            {/* Orb gold */}
            <div
                className="absolute -top-[10%] -right-[10%] w-[60%] aspect-square rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,195,0,0.08) 0%, transparent 70%)', ...parallax(0.5) }}
            />
            {/* Orb blue */}
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] aspect-square rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, transparent 70%)' }}
            />
            {/* Orb kecil */}
            <div
                className="absolute top-[30%] left-[20%] w-[30%] aspect-square rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,195,0,0.04) 0%, transparent 70%)', ...parallax(0.8) }}
            />

            {/* Scanline */}
            <div className="h-scanline absolute inset-x-0 h-[2px] pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,195,0,0.3), transparent)' }}
            />

            {/* ══════════ MOBILE ══════════ */}
            <div className="lg:hidden relative z-10 flex flex-col min-h-screen px-5 pt-12 pb-8">

                {/* Badge */}
                <div className="h-a1">
                    <span className="h-bglow font-body inline-flex items-center gap-1.5
                        bg-primary-gold-950/40 border border-primary-gold-800 rounded-full
                        px-4 py-1 text-[11px] text-primary-gold-400 uppercase tracking-widest font-semibold">
                        ✦ Open for projects
                    </span>
                </div>

                {/* Heading */}
                <div className="mt-5 h-a2">
                    <h1 className="font-header font-bold text-text-50 leading-none"
                        style={{ fontSize: 'clamp(3.2rem,16vw,6.5rem)', letterSpacing: '0.02em' }}>
                        AKU{" "}
                        <span className="h-gold-text">IFRAD</span>
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-10 h-[2px] shrink-0"
                            style={{ background: 'linear-gradient(90deg, var(--color-primary-gold-400), transparent)' }} />
                        <p className="font-body text-text-300 text-[11px] font-semibold tracking-widest uppercase">
                            Front-End × WhatsApp Bot
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="relative mt-6 h-img">
                    <div className="relative mx-auto w-3/4 max-w-[280px]">
                        <div className="absolute -inset-[2px] rounded-[20px] z-0"
                            style={{ background: 'linear-gradient(135deg, var(--color-primary-gold-400), transparent 60%, #16a34a)' }} />
                        <img
                            src={fotoTes}
                            alt="Ifrad"
                            className="h-float relative z-10 w-full aspect-[3/4] object-cover object-right rounded-[18px]"
                        />
                    </div>
                    <div className="absolute -top-2 left-[11%] w-16 h-16 border-t-2 border-l-2 border-primary-gold-700/40" />
                    <div className="absolute -bottom-2 right-[11%] w-16 h-16 border-b-2 border-r-2 border-primary-gold-700/40" />
                </div>

                {/* Stats */}
                <div className="flex gap-3 mt-6 h-a3">
                    {[["50+", "Klien"], ["3+", "Tahun"], ["100%", "Puas"]].map(([num, label]) => (
                        <div key={label} className="flex-1 text-center bg-background-800/40 border border-background-700 rounded-2xl px-3 py-3">
                            <div className="h-gold-text font-header font-bold leading-none" style={{ fontSize: '1.8rem' }}>
                                {num}
                            </div>
                            <div className="font-body text-text-300 text-[11px] mt-1 uppercase tracking-wide">{label}</div>
                        </div>
                    ))}
                </div>

                {/* Desc */}
                <p className="font-body mt-5 text-text-200 text-base leading-relaxed h-a4">
                    Bangun websitemu & sistem otomatisasi WhatsApp untuk penjualan yang{" "}
                    <span className="text-primary-gold-400 font-semibold">cepat, mudah, dan terukur</span>.
                </p>

                {/* CTA */}
                <a href="https://wa.me/6282260740023" className="mt-6 block h-a5">
                    <button className="h-cta-btn relative w-full py-4 rounded-2xl text-text-50 font-body font-bold text-base overflow-hidden group">
                        <span className="relative z-10">💬 Mulai Konsultasi Gratis</span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </a>

                <p className="font-body text-text-400 text-xs text-center mt-3 h-a5">
                    Respon cepat · Tanpa biaya tersembunyi
                </p>
            </div>

            {/* ══════════ DESKTOP ══════════ */}
            <div className="hidden lg:flex relative z-10 min-h-screen items-center px-16 xl:px-24">

                {/* LEFT */}
                <div className="flex-1 flex flex-col justify-center gap-8 pr-8 xl:pr-16">

                    {/* Badge */}
                    <div className="h-a1">
                        <span className="h-bglow font-body inline-flex items-center gap-1.5
                            bg-primary-gold-950/40 border border-primary-gold-800 rounded-full
                            px-4 py-1 text-[11px] text-primary-gold-400 uppercase tracking-widest font-semibold">
                            ✦ Available for new projects
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="h-a2">
                        <h1 className="font-header font-bold text-text-50 leading-none"
                            style={{ fontSize: 'clamp(4.5rem,8vw,9rem)', letterSpacing: '0.02em' }}>
                            AKU
                        </h1>
                        <h1 className="h-gold-text font-header font-bold leading-none -mt-2"
                            style={{ fontSize: 'clamp(4.5rem,8vw,9rem)', letterSpacing: '0.02em' }}>
                            IFRAD
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-2 h-a3">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[2px] shrink-0"
                                style={{ background: 'linear-gradient(90deg, var(--color-primary-gold-400), transparent)' }} />
                            <p className="font-body text-text-300 uppercase tracking-widest text-sm font-semibold">
                                Front-End Developer & WhatsApp Automation Builder
                            </p>
                        </div>
                        <p className="font-body text-text-200 text-lg xl:text-xl leading-relaxed max-w-lg pl-[60px]">
                            Bangun websitemu & sistem otomatisasi WhatsApp untuk penjualan yang{" "}
                            <span className="text-primary-gold-400 font-semibold">cepat, mudah, dan terukur</span>.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 h-a4">
                        {[["20+", "Klien Puas"], ["2+", "Tahun Pengalaman"], ["∞", "Ide Kreatif"]].map(([num, label]) => (
                            <div key={label} className="bg-background-800/40 border border-background-700 rounded-2xl px-5 py-3">
                                <div className="h-gold-text font-header font-bold leading-none" style={{ fontSize: '2.2rem' }}>
                                    {num}
                                </div>
                                <div className="font-body text-text-300 text-[11px] mt-1 uppercase tracking-wide">{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-5 h-a5">
                        <a href="https://wa.me/6282260740023">
                            <button className="h-cta-btn relative px-10 py-5 rounded-2xl text-text-50 font-body font-bold text-lg overflow-hidden group">
                                <span className="relative z-10">💬 Mulai Konsultasi Gratis</span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </a>
                        <p className="font-body text-text-400 text-sm">Respon cepat · No hidden cost</p>
                    </div>
                </div>

                {/* RIGHT – Image */}
                <div className="h-img flex-shrink-0 relative" style={{ width: "42%", maxWidth: "520px" }}>

                    {/* Decorative rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border border-primary-gold-900/30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[128%] aspect-square rounded-full border border-primary-gold-900/15" />

                    {/* Image frame */}
                    <div className="h-float relative mx-auto w-[85%]">
                        <div className="absolute -inset-[2px] rounded-[20px] z-0"
                            style={{ background: 'linear-gradient(135deg, var(--color-primary-gold-400), transparent 60%, #16a34a)' }} />
                        <img
                            src={fotoTes}
                            alt="Ifrad - Front-End Developer"
                            className="relative z-10 w-full aspect-[3/4] object-cover object-right rounded-[18px]"
                        />
                    </div>

                    {/* Corner accents */}
                    <div className="absolute -top-1.5 left-[6%] w-20 h-20 border-t-2 border-l-2 border-primary-gold-700/40" />
                    <div className="absolute -bottom-1.5 right-[6%] w-20 h-20 border-b-2 border-r-2 border-primary-gold-700/40" />

                    {/* Floating card – Website */}
                    <div className="h-cu1 absolute bottom-[8%] -left-[5%] bg-background-950/90 border border-primary-gold-800/30 rounded-2xl px-5 py-3 backdrop-blur-xl">
                        <div className="h-gold-text font-header font-bold leading-none" style={{ fontSize: '1.6rem' }}>50+</div>
                        <div className="font-body text-text-300 text-xs mt-0.5">Website Delivered</div>
                    </div>

                    {/* Floating card – WA Bot */}
                    <div className="h-cu2 absolute top-[12%] -right-[5%] bg-background-950/90 border border-background-700 rounded-2xl px-5 py-3 backdrop-blur-xl">
                        <div className="font-header font-bold text-green-400 leading-none" style={{ fontSize: '1.6rem' }}>WA Bot</div>
                        <div className="font-body text-text-300 text-xs mt-0.5">Automation Expert</div>
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, var(--color-background-950))' }} />
        </section>
    );
};

export default HeroSection;