 
# Panduan Conventional Commits

* `feat`: Fitur baru
* `fix`: Perbaikan bug
* `docs`: Perubahan dokumentasi
* `style`: Perubahan format (tidak mengubah kode)
* `refactor`: Refaktor kode
* `test`: Menambah atau memperbaiki test
* `chore`: Perubahan build process atau auxiliary tools

---

#### contoh penggunaan:
 - "feat: menambahkan halaman kontak"
 - "fix: memperbaiki bug pada navigasi mobile"
 - "docs: memperbarui README.md"
 
Berikut adalah penjelasan setiap tipe **Conventional Commit** dalam bentuk paragraf singkat, cocok buat kamu yang mau cepat paham tapi tetap ngerti konteks praktisnya:

---

### `feat` – Menambahkan Fitur Baru

Gunakan tipe `feat` ketika kamu menambahkan fitur baru pada kode. Ini menandakan bahwa perubahan ini memperluas kemampuan aplikasi, misalnya menambah halaman baru, fungsi baru, atau komponen yang sebelumnya belum ada. Contoh: `feat: menambahkan fitur pencarian produk`.

---

### `fix` – Memperbaiki Bug

Gunakan `fix` saat kamu memperbaiki bug yang menyebabkan aplikasi tidak berjalan sebagaimana mestinya. Commit ini penting untuk tracking regresi atau perubahan yang langsung memperbaiki masalah. Contoh: `fix: memperbaiki bug ketika tombol submit tidak merespons`.

---

### `docs` – Perubahan Dokumentasi

`docs` dipakai jika perubahan hanya menyentuh dokumentasi, seperti README, dokumentasi API, atau komentar penjelas, **tanpa mengubah perilaku kode**. Ini berguna untuk menjaga dokumentasi tetap up-to-date. Contoh: `docs: menambahkan penjelasan instalasi pada README`.

---

### `style` – Perubahan Gaya Penulisan Kode

Kalau kamu cuma mengubah indentasi, spasi, tanda titik koma, atau format lain **yang tidak memengaruhi logika kode**, gunakan `style`. Ini membantu menjaga konsistensi penulisan kode. Contoh: `style: merapikan indentasi pada file App.js`.

---

### `refactor` – Refaktor Kode

Pakai `refactor` ketika kamu mengubah struktur kode atau logikanya agar lebih efisien atau lebih mudah dibaca **tanpa mengubah fungsionalitas**. Biasanya ini dilakukan untuk perbaikan jangka panjang. Contoh: `refactor: memisahkan fungsi validasi ke modul tersendiri`.

---

### `test` – Menambah atau Memperbaiki Testing

Commit ini digunakan untuk menambah, memperbaiki, atau merapikan unit test, integration test, atau semacamnya. Tidak mengubah fungsionalitas utama aplikasi. Contoh: `test: menambahkan unit test untuk komponen login`.

---

### `chore` – Tugas Rutin atau Konfigurasi Tambahan

`chore` digunakan untuk perubahan yang tidak memengaruhi fitur aplikasi, seperti memperbarui dependensi, konfigurasi build tool, atau setting CI/CD. Contoh: `chore: memperbarui versi eslint`.

---
