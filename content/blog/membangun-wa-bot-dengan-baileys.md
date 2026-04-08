---
title: "Membangun WhatsApp Bot dengan Baileys.js"
excerpt: "Panduan step-by-step membuat bot WhatsApp pertamamu menggunakan baileys.js — library open-source yang powerful untuk automasi WA."
date: "2026-03-20"
tags: ["whatsapp bot", "baileys.js", "node.js", "tutorial"]
published: true
---

# Membangun WhatsApp Bot dengan Baileys.js

Baileys.js adalah library Node.js yang memungkinkan kita berinteraksi dengan WhatsApp Web API secara programatik. Cocok untuk membuat chatbot, auto-responder, dan sistem notifikasi otomatis.

## Prerequisites

- Node.js v18+
- Akun WhatsApp aktif
- Basic knowledge of JavaScript

## Instalasi

```bash
npm install @whiskeysockets/baileys
```

## Setup Dasar

```javascript
const { default: makeWASocket, DisconnectReason } = require('@whiskeysockets/baileys')

async function connectToWhatsApp() {
    const sock = makeWASocket({
        printQRInTerminal: true
    })

    sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
        if (connection === 'open') {
            console.log('Connected!')
        }
    })

    sock.ev.on('messages.upsert', ({ messages }) => {
        const msg = messages[0]
        if (!msg.key.fromMe) {
            // Handle incoming message
            sock.sendMessage(msg.key.remoteJid, { text: 'Halo!' })
        }
    })
}

connectToWhatsApp()
```

## Fitur Lanjutan

Setelah koneksi berhasil, kamu bisa:
1. **Auto-reply** berdasarkan keyword
2. **Kirim media** (gambar, dokumen, audio)
3. **Manage grup** (tambah/hapus member)
4. **Broadcast** ke banyak nomor sekaligus

---

*Post ini masih dalam pengembangan. Stay tuned!*
