let isLoginMode = true;

function toggleAuth() {
    isLoginMode = !isLoginMode; 
    
    if (isLoginMode) {
        document.getElementById('auth-mode-text').innerText = "SILAKAN MASUK";
        document.getElementById('auth-btn').innerText = "MASUK";
        document.getElementById('toggle-text').innerText = "BELUM PUNYA AKUN? DAFTAR DI SINI";
    } else {
        document.getElementById('auth-mode-text').innerText = "DAFTAR AKUN BARU";
        document.getElementById('auth-btn').innerText = "DAFTAR";
        document.getElementById('toggle-text').innerText = "SUDAH PUNYA AKUN? MASUK DI SINI";
    }
    
    document.getElementById('error-msg').style.display = "none";
}

function handleAuth() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const errorElement = document.getElementById('error-msg');

    if(!u || !p) {
        errorElement.innerText = "Isi data dengan lengkap!";
        errorElement.style.display = "block";
        return;
    }

    if(isLoginMode) {
        const storedPass = localStorage.getItem(u);
        if(storedPass === p) {
            document.getElementById('auth-overlay').style.display = 'none';
            document.getElementById('main-web').style.display = 'block';
        } else {
            errorElement.innerText = "Sandi Salah!";
            errorElement.style.display = "block";
        }
    } else {
        localStorage.setItem(u, p);
        alert("Berhasil Daftar! Silakan Login Kembali.");
        
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        toggleAuth(); 
    }
}

function openPopup(id) { document.getElementById(id).style.display = 'flex'; }
function closePopup(id) { document.getElementById(id).style.display = 'none'; }

function sendToWA() {
    const room = document.getElementById('res-room').value;
    const date = document.getElementById('res-date').value;
    if(!room || !date) return alert("Pilih tipe kamar dan tanggal!");
    window.open(`https://wa.me/6282328427257?text=Halo Amanjiwo, saya ingin reservasi ${room} untuk tanggal ${date}`, '_blank');
}
