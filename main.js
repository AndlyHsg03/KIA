document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan semua tombol flip
    const flipButtons = document.querySelectorAll('#btn');
    // Mendapatkan wrapper kartu
    const kartuWrapper = document.querySelector('.kartu-wrapper');
    
    // Tambahkan log untuk debugging
    console.log("Tombol flip ditemukan:", flipButtons.length);
    console.log("Kartu wrapper ditemukan:", kartuWrapper);
    
    // Menambahkan event listener untuk setiap tombol
    flipButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("Tombol diklik!");
            // Toggle class flip pada wrapper
            kartuWrapper.classList.toggle('flip');
        });
    });
});