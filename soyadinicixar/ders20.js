function soyadiAl() {
    let adSoyad = prompt("Zəhmət olmasa, ad və soyadınızı daxil edin:").trim(); 
    let soyad = adSoyad.split(" ").pop(); 
    console.log(`Sizin soyadınız: ${soyad}`);
}
soyadiAl();