// --- Data Pertanyaan --- (TETAP SAMA SEPERTI KODE SEBELUMNYA)
const dataKuis = {
    // LEVEL 1: Surat Al-Alaq (5 Soal)
    level1: [
        {
            materi: "Surat Al-Alaq",
            pertanyaan: "Bacaan ayat pertama Surat Al-Alaq adalah... (Tulisannya dalam Arab: اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ)",
            opsi: {
                A: "Iqra' bismi rabbikal-lazī khalaq", // Jawaban Benar
                B: "Khalaqal-insāna min 'alaq",
                C: "Iqra' warabbukal-akram",
                D: "Kallā innal-insāna layaṭgā"
            },
            jawabanBenar: "A"
        },
        {
            materi: "Surat Al-Alaq",
            pertanyaan: "Apa arti dari kata **اقْرَأْ** (Iqra')?",
            opsi: {
                A: "Berdirilah",
                B: "Bacalah", // Jawaban Benar
                C: "Menciptakan",
                D: "Berkehendak"
            },
            jawabanBenar: "B"
        },
        {
            materi: "Surat Al-Alaq",
            pertanyaan: "Manusia diciptakan dari segumpal darah (alaq), terdapat pada ayat ke...",
            opsi: {
                A: "Ayat 1",
                B: "Ayat 2", // Jawaban Benar
                C: "Ayat 3",
                D: "Ayat 4"
            },
            jawabanBenar: "B"
        },
        {
            materi: "Surat Al-Alaq",
            pertanyaan: "Surat Al-Alaq adalah wahyu yang pertama kali diterima oleh Nabi Muhammad SAW di...",
            opsi: {
                A: "Mekkah",
                B: "Madinah",
                C: "Gua Hira", // Jawaban Benar
                D: "Gua Tsur"
            },
            jawabanBenar: "C"
        },
        {
            materi: "Surat Al-Alaq",
            pertanyaan: "Siapakah yang mengajari manusia dengan perantaraan **القَلَمِ** (pena)?",
            opsi: {
                A: "Malaikat Jibril",
                B: "Nabi Muhammad",
                C: "Allah SWT", // Jawaban Benar
                D: "Orang Tua"
            },
            jawabanBenar: "C"
        },
    ],
    // LEVEL 2: Sifat Wajib bagi Allah (10 Soal)
    level2: [
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat **وُجُودٌ** (Wujud) artinya...",
            opsi: {
                A: "Ada", // Jawaban Benar
                B: "Terdahulu",
                C: "Kekal",
                D: "Berdiri sendiri"
            },
            jawabanBenar: "A"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat **قِدَمٌ** (Qidam) artinya...",
            opsi: {
                A: "Ada",
                B: "Terdahulu", // Jawaban Benar
                C: "Kekal",
                D: "Berdiri sendiri"
            },
            jawabanBenar: "B"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat Allah yang wajib diketahui dan merupakan lawan dari sifat **مُمَاثَلَةٌ لِّلْحَوَادِثِ** (Mumatsalatu lil hawaditsi - serupa dengan makhluk) adalah...",
            opsi: {
                A: "Qiyamuhu Binafsihi",
                B: "Baqo'",
                C: "Wahdaniyah",
                D: "Mukhalafatuhu lil hawaditsi" // Jawaban Benar
            },
            jawabanBenar: "D"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat Allah **قُدْرَةٌ** (Qudrat) artinya...",
            opsi: {
                A: "Kuasa", // Jawaban Benar
                B: "Berkehendak",
                C: "Mendengar",
                D: "Melihat"
            },
            jawabanBenar: "A"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat **سَمْعٌ** (Sama') artinya Allah...",
            opsi: {
                A: "Melihat",
                B: "Mendengar", // Jawaban Benar
                C: "Berbicara",
                D: "Berilmu"
            },
            jawabanBenar: "B"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Apa sifat yang menunjukkan Allah tidak membutuhkan bantuan dari siapapun?",
            opsi: {
                A: "Iradat",
                B: "Hayat",
                C: "Qiyamuhu Binafsihi", // Jawaban Benar
                D: "Kalam"
            },
            jawabanBenar: "C"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat **كَلَامٌ** (Kalam) artinya Allah memiliki sifat...",
            opsi: {
                A: "Hidup",
                B: "Berkehendak",
                C: "Berfirman/Berbicara", // Jawaban Benar
                D: "Mampu menciptakan"
            },
            jawabanBenar: "C"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat **وَحْدَانِيَّةٌ** (Wahdaniyah) menunjukkan bahwa Allah itu...",
            opsi: {
                A: "Kekal",
                B: "Esa (Tunggal)", // Jawaban Benar
                C: "Sempurna",
                D: "Berilmu"
            },
            jawabanBenar: "B"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat **عِلْمٌ** ('Ilmu) artinya Allah...",
            opsi: {
                A: "Melihat",
                B: "Mendengar",
                C: "Berilmu/Mengetahui", // Jawaban Benar
                D: "Berfirman"
            },
            jawabanBenar: "C"
        },
        {
            materi: "Sifat Wajib Allah",
            pertanyaan: "Sifat **بَقَاءٌ** (Baqo') artinya...",
            opsi: {
                A: "Ada",
                B: "Terdahulu",
                C: "Kekal/Abadi", // Jawaban Benar
                D: "Berdiri sendiri"
            },
            jawabanBenar: "C"
        },
    ],
    // LEVEL 3: Sifat Mustahil bagi Allah (15 Soal)
    level3: [
        {
            materi: "Sifat Mustahil Allah",
            pertanyaan: "Sifat mustahil **'Adam** adalah lawan dari Wujud, yang berarti...",
            opsi: {
                A: "Baru",
                B: "Tidak Ada", // Jawaban Benar
                C: "Binasah",
                D: "Lemah"
            },
            jawabanBenar: "B"
        },
        {
            materi: "Sifat Mustahil Allah",
            pertanyaan: "Sifat **Huduts** adalah lawan dari Qidam, yang berarti...",
            opsi: {
                A: "Tidak Kekal",
                B: "Bermula/Baru", // Jawaban Benar
                C: "Bisu",
                D: "Tuli"
            },
            jawabanBenar: "B"
        },
        {
            materi: "Sifat Mustahil Allah",
            pertanyaan: "Lawan dari sifat Baqo' (Kekal) adalah **Fana'**, yang berarti...",
            opsi: {
                A: "Binasah/Rusak", // Jawaban Benar
                B: "Tidak Mampu",
                C: "Terpaksa",
                D: "Tidur"
            },
            jawabanBenar: "A"
        },
        {
            materi: "Sifat Mustahil Allah",
            pertanyaan: "Sifat mustahil **'Ajzun** adalah lawan dari Qudrat, yang berarti...",
            opsi: {
                A: "Tuli",
                B: "Bisu",
                C: "Lemah/Tidak Kuasa", // Jawaban Benar
                D: "Buta"
            },
            jawabanBenar: "C"
        },
        {
            materi: "Sifat Mustahil Allah",
            pertanyaan: "Sifat mustahil **Karahaah** adalah lawan dari Iradat, yang berarti...",
            opsi: {
                A: "Terpaksa", // Jawaban Benar
                B: "Tidak Tahu",
                C: "Tuli",
                D: "Tidak Berfirman"
            },
            jawabanBenar: "A"
        },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Lawan dari 'Ilmu adalah **Jahlun**, yang berarti...", opsi: { A: "Tidak Tahu/Bodoh", B: "Berbilang", C: "Bisu", D: "Tuli" }, jawabanBenar: "A" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat **Mautun** (Mati) adalah lawan dari sifat wajib...", opsi: { A: "Qudrat", B: "Kalam", C: "Hayat", D: "Sama'" }, jawabanBenar: "C" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat mustahil yang berarti 'buta' adalah **'Umyun**, lawan dari sifat wajib...", opsi: { A: "Sama'", B: "Bashar", C: "Kalam", D: "Iradat" }, jawabanBenar: "B" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat mustahil **Shamum** berarti...", opsi: { A: "Bisu", B: "Tuli", C: "Buta", D: "Mati" }, jawabanBenar: "B" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat **Bukmun** berarti...", opsi: { A: "Tuli", B: "Bisu", C: "Buta", D: "Lemah" }, jawabanBenar: "B" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat **Ihtiyaju lighairihi** (butuh pada yang lain) adalah lawan dari...", opsi: { A: "Wahdaniyah", B: "Qiyamuhu Binafsihi", C: "Wujud", D: "Qidam" }, jawabanBenar: "B" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat mustahil **Ta'addud** (Berbilang) adalah lawan dari sifat wajib...", opsi: { A: "Hayat", B: "Wahdaniyah", C: "Kalam", D: "Bashar" }, jawabanBenar: "B" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat mustahil bagi Allah yang berarti 'serupa dengan makhluk-Nya' adalah...", opsi: { A: "Fana'", B: "Mumatsalatu lil hawaditsi", C: "Jahlun", D: "Karahaah" }, jawabanBenar: "B" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Lawan dari sifat **Bashar** (Melihat) adalah sifat mustahil...", opsi: { A: "Shamum", B: "Bukmun", C: "Mautun", D: "'Umyun" }, jawabanBenar: "D" },
        { materi: "Sifat Mustahil Allah", pertanyaan: "Sifat mustahil **Mumatsalatu lil hawaditsi** artinya...", opsi: { A: "Tidak tahu", B: "Terpaksa", C: "Serupa dengan makhluk", D: "Binasah" }, jawabanBenar: "C" },
    ],
};

// --- Konfigurasi Game ---
const KKM = 70;
const LEVEL_MAP = {
    1: { name: "Level 1: Al-Alaq (5 Soal)", total: dataKuis.level1.length, data: dataKuis.level1 },
    2: { name: "Level 2: Sifat Wajib (10 Soal)", total: dataKuis.level2.length, data: dataKuis.level2 },
    3: { name: "Level 3: Sifat Mustahil (15 Soal)", total: dataKuis.level3.length, data: dataKuis.level3 },
};

// --- Variabel State Game ---
let namaSiswa = "";
let skorLevel = 0; // Jawaban benar di level saat ini (untuk kelulusan per level)
let skorTotal = 0; // Jumlah total jawaban benar (untuk nilai akhir)
let levelSaatIni = 1;
let pertanyaanSaatIniIndex = 0;
let gameSedangBerjalan = false;

// --- Ambil Elemen HTML ---
const inputContainer = document.getElementById('input-nama-container');
const kuisContainer = document.getElementById('kuis-utama-container');
const sertifikatContainer = document.getElementById('sertifikat-container');

const namaDisiniEl = document.getElementById('nama-disini');
const levelInfoEl = document.getElementById('level-info');
const pertanyaanEl = document.getElementById('pertanyaan');
const skorEl = document.getElementById('skor'); // Element untuk menampilkan Skor
const materiLabelEl = document.getElementById('materi-label');
const tombolLanjut = document.getElementById('tombol-lanjut');
const tombolMulaiKuis = document.getElementById('tombol-mulai-kuis');
const opsiTombol = Array.from(document.querySelectorAll('.opsi-btn'));

// --- HILANGKAN/KOMENTARI VARIABEL AUDIO (Karena tidak digunakan di HTML) ---
// const audioBenar = document.getElementById('audio-benar'); 
// const audioSalah = document.getElementById('audio-salah');


// --- Fungsi Utama ---

/**
 * Memperbarui tampilan skor di header.
 * Menampilkan: (Nilai Level saat ini/100) | (Total Jawaban Benar dari seluruh level)
 */
function updateSkorDisplay() {
    const totalSoalLevel = LEVEL_MAP[levelSaatIni].total;
    // Hitung Nilai Level: (Skor Benar Level / Total Soal Level) * 100
    const nilaiLevel = (skorLevel / totalSoalLevel) * 100;
    
    // Tampilkan skor level (dibulatkan) dan total jawaban benar.
    skorEl.textContent = `Skor Level: ${nilaiLevel.toFixed(0)} | Total Benar: ${skorTotal}`;
}

/** 1. Handle Input Nama dan Mulai Kuis */
tombolMulaiKuis.addEventListener('click', () => {
    const inputNama = document.getElementById('nama-siswa').value.trim();
    if (inputNama.length < 2) {
        Swal.fire('Perhatian!', 'Mohon masukkan nama Anda terlebih dahulu.', 'warning');
        return;
    }
    namaSiswa = inputNama;
    namaDisiniEl.textContent = namaSiswa;

    // Sembunyikan input nama, tampilkan kuis
    inputContainer.style.display = 'none';
    kuisContainer.style.display = 'block';
    
    mulaiLevel();
});

/** 2. Memulai Level Baru */
function mulaiLevel() {
    pertanyaanSaatIniIndex = 0;
    skorLevel = 0; // Pastikan skor level di-reset saat level baru dimulai/diulang
    levelInfoEl.textContent = LEVEL_MAP[levelSaatIni].name;
    updateSkorDisplay(); // Perbarui skor saat level dimulai
    acakPertanyaan(LEVEL_MAP[levelSaatIni].data);
    tampilkanPertanyaan();
}

/** 3. Tampilkan Pertanyaan ke Layar */
function tampilkanPertanyaan() {
    const dataLevel = LEVEL_MAP[levelSaatIni].data;
    
    if (pertanyaanSaatIniIndex >= dataLevel.length) {
        // Level Selesai
        cekKelulusanLevel();
        return;
    }
    
    gameSedangBerjalan = true;
    tombolLanjut.style.display = 'none'; // Sembunyikan tombol lanjut saat pertanyaan baru

    const data = dataLevel[pertanyaanSaatIniIndex];
    materiLabelEl.textContent = LEVEL_MAP[levelSaatIni].name;
    pertanyaanEl.textContent = `${pertanyaanSaatIniIndex + 1}. ${data.pertanyaan}`;

    // Tampilkan opsi dan aktifkan tombol
    const opsiKeys = Object.keys(data.opsi);
    opsiTombol.forEach((button, index) => {
        const key = opsiKeys[index];
        button.textContent = `${key}. ${data.opsi[key]}`;
        
        // Gunakan event listener untuk cek jawaban
        button.onclick = () => cekJawaban(key, data.jawabanBenar);
        
        button.disabled = false;
        button.className = 'opsi-btn'; // Reset kelas warna
    });
}

/** 4. Cek Jawaban Pemain */
function cekJawaban(jawabanPilihan, jawabanBenar) {
    if (!gameSedangBerjalan) return;
    
    gameSedangBerjalan = false;
    nonaktifkanOpsi();

    const tombolDipilih = opsiTombol.find(btn => btn.textContent.startsWith(jawabanPilihan + "."));
    const tombolBenar = opsiTombol.find(btn => btn.textContent.startsWith(jawabanBenar + "."));

    if (jawabanPilihan === jawabanBenar) {
        skorLevel++;
        skorTotal++;
        tombolDipilih.classList.add('correct');
        tampilkanSweetAlert(true, tombolBenar.textContent);
        
        // --- LOGIKA AUDIO DIHAPUS ---

    } else {
        tombolDipilih.classList.add('wrong');
        tombolBenar.classList.add('correct');
        tampilkanSweetAlert(false, tombolBenar.textContent);
        
        // --- LOGIKA AUDIO DIHAPUS ---
    }
    
    updateSkorDisplay(); // Perbarui skor di layar
    pertanyaanSaatIniIndex++;
    tombolLanjut.style.display = 'block'; // **PENTING: Tampilkan tombol Lanjut setelah jawaban di-cek**
}

/** 5. Cek Kelulusan Level (Leveling System) */
function cekKelulusanLevel() {
    const dataLevel = LEVEL_MAP[levelSaatIni];
    const nilaiLevel = (skorLevel / dataLevel.total) * 100;

    let pesan;
    let icon;
    let nextAction;

    if (nilaiLevel >= KKM) {
        pesan = `Hebat! Anda lulus Level ${levelSaatIni} dengan nilai ${nilaiLevel.toFixed(0)}. Siap menuju Level ${levelSaatIni + 1}?`;
        icon = 'success';
        if (levelSaatIni < Object.keys(LEVEL_MAP).length) {
            tombolLanjut.textContent = `Lanjut ke Level ${levelSaatIni + 1}`;
            nextAction = 'lanjut';
        } else {
            tombolLanjut.textContent = `Lihat Sertifikat Akhir!`;
            nextAction = 'selesai';
        }
    } else {
        pesan = `Maaf, nilai Anda ${nilaiLevel.toFixed(0)}. Belum mencapai KKM (${KKM}). Anda harus mengulang Level ${levelSaatIni}.`;
        icon = 'error';
        tombolLanjut.textContent = `Ulangi Level ${levelSaatIni}`;
        nextAction = 'ulang';
    }
    
    // Tampilkan hasil level menggunakan SweetAlert
    Swal.fire({
        title: `Hasil Level ${levelSaatIni}`,
        text: pesan,
        icon: icon,
        confirmButtonText: tombolLanjut.textContent
    }).then(() => {
        if (nextAction === 'lanjut') {
            levelSaatIni++;
            mulaiLevel(); 
        } else if (nextAction === 'selesai') {
            gameSelesai();
        } else { // nextAction === 'ulang'
            mulaiLevel();
        }
    });

    tombolLanjut.style.display = 'none'; // Tombol lanjut dikelola oleh SweetAlert
}

/** 6. Game Selesai Total & Sertifikat */
function gameSelesai() {
    kuisContainer.style.display = 'none';
    sertifikatContainer.style.display = 'block';

    const totalSoal = dataKuis.level1.length + dataKuis.level2.length + dataKuis.level3.length;
    const nilaiAkhir = (skorTotal / totalSoal) * 100;

    document.getElementById('nama-sertifikat').textContent = namaSiswa;
    document.getElementById('nilai-akhir').textContent = nilaiAkhir.toFixed(0) + " dari 100";
}

/** 7. Tampilkan SweetAlert */
function tampilkanSweetAlert(isCorrect, jawaban) {
    const icon = isCorrect ? 'success' : 'error';
    const title = isCorrect ? 'Jawaban Benar! 🎉' : 'Jawaban Salah 😥';
    const text = isCorrect ? 'Alhamdulillah, lanjut!' : `Jawaban yang benar adalah: ${jawaban}.`;

    Swal.fire({
        position: 'center',
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 1500
    });
}

/** 8. Utility Functions */
function acakPertanyaan(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function nonaktifkanOpsi() {
    opsiTombol.forEach(button => button.disabled = true);
}

// --- Fungsi Jam Digital Berjalan (Dengan Hari dan Tanggal) ---
function updateClock() {
    const now = new Date();
    
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', optionsDate);
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').innerHTML = `${dateString} | ${timeString}`;
}

// --- Event Listeners Tambahan ---
tombolLanjut.addEventListener('click', tampilkanPertanyaan);
document.getElementById('tombol-ulang').addEventListener('click', () => window.location.reload());

// --- Inisialisasi Awal ---
kuisContainer.style.display = 'none';
sertifikatContainer.style.display = 'none';

// Mulai Jam
updateClock();

setInterval(updateClock, 1000);
