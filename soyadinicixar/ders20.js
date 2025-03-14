function soyadiAl(adSoyad) {
    let soyad = adSoyad.trim().split(" ").pop(); 
    console.log(`Sizin soyadınız: ${soyad}`);
}
soyadiAl("      Jasmin Ceferova      ");;
