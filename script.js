function startApp() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    // Kamu bisa tambahkan kode putar musik di sini
    // Memutar musik saat layar disentuh pertama kali
    var audio = document.getElementById("myAudio");
    audio.play().catch(function(error) {
        console.log("Autoplay diblokir oleh browser, musik akan diputar setelah interaksi.");
    });
}

function openGift() {
    const gift = document.getElementById('gift-box');
    const hint = document.getElementById('gift-hint');
    const secret = document.getElementById('secret-message');
    
    gift.innerHTML = "💖"; // Ganti kado jadi hati
    gift.style.animation = "none";
    hint.style.display = "none";
    secret.classList.remove('hidden');
    
    // Efek confetti sederhana bisa ditambahkan di sini
}
