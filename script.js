// Menampilkan teks langsung tanpa animasi mengetik
const textButton = document.getElementById("textButton");
const textContent = document.getElementById("textContent");

// Teks panjang yang akan ditampilkan
const text = `HAIII Chamomile, eh Caca eh Caca itu nama panggilan dari mama, maksudku sayang ehh, kok sayang, Chamomile? bgitu kah? atau panggilku Cha aja? apa cipluk? hehhe maaff, maaaf yaa aku buat ini pake ai soalnya aku gada basic untuk coding hehehe maaf yaa. maaf juga slalu buat masalah dan slalu buat kamu ga mood, aku minta maaf yaa, okeii? ohh iya apa kamuu bisa balik kayak duluu?? kalau bisa Alhamdulillah tapi kalau gabisa sih...🤔. Gapapa kok itu hak mu dan oh iyaa, tauu ga?? 
🗣️ : gatau lah kocak
ehh iya ya kan aku belum kasih tau😔 hehehe maaaf kalau garing hehehe.. mau tau ga kalauu aku syaang sama kamuu sampai kapanpun, ehh iya kalau kita jadi baikan dan kamu kayak dulu lagi sayangg maaf ya belum bisa ketemu kamu, nantii mas usahakan buat ketemu kamuu hehehe, ntah bagaimana pun itu caranya tetap mass akan usahakan, nantii mass nabung duluu tapi hehehe😅, biar bisa jajanin kamuuu masa ajak anak orangg tidaa di jajanin 😭, Dann maaf yaa belum bisa beliin ini itu karena ekonomi ku juga masihh di buaaawaahhh bangett 📉, jadii maaff belum bisa meratukan kamuu, TAPIII!!! tapii nantii kalau mass sudaaa kerjaa dannnnn.... kita baikan dan kayak dulu lagii mass janji akan meratukan kamuuu, dannn lamarrr kamuu 💍 tapii tunggu sebulan yaaahhh okeii???dan kalau sudah melamar dan masss kerjaaa dulu sampaii bisa melunasi hutang hutang keluarga masss dan mass sudaa siap dalam segala hal dari modal untuk nantii habis nikah,ekonomi, mental, dan sudahh bisa bertanggung jawab buat kamuu masss akan langsung menikah.. okeii?? heheehee maafff ya prosesss nyaa mass lamaa bangett heheheh, tapi kalau kamu mau nyari yang lain gapapa, itu hak mu kokk🙆🏻‍♂️ mass cuman hanya mencobaaaa meratukan sajaaa, dann kenapaa mass sayang sama kamuu?? karenaa tempat mass bercerita,menangis,manja cumann sama kamuu, yaaa... mas tau mas ada mama,papa,bunda tapi kan tidakk mungkin, mamaa sibuk kerja di sana buat menafkahi mamaa sendirii, papaa sibukk menafkahi kami yang di jawaa, bunda? hehee mass gabisa kalau nangiss ke bunda, sebenarnya papa dan mama juga mass gamungkin menangiss karena masss harusss kuat, masa hanya segini mass menangis? kan ga mungkin, jadii mass sayangg sama kamuu ya begituu, mass akan tunggu besokk yaaa sayangg, jawaban dari kamuu hehehe, love you ciplukku 💞💞💞.`;

// Tampilkan teks lengkap saat tombol diklik
textButton.addEventListener("click", () => {
  textContent.innerText = text; // Tampilkan seluruh teks
  textContent.classList.remove("hidden"); // Tampilkan elemen teks

  // Sembunyikan teks setelah 8 detik
  setTimeout(() => {
    textContent.classList.add("hidden"); // Sembunyikan elemen
    textContent.innerText = ""; // Kosongkan teks
  }, 8000); // Durasi 8 detik
});

// Menampilkan foto
const photoButton = document.getElementById("photoButton");
const photoContent = document.getElementById("photoContent");

photoButton.addEventListener("click", () => {
  photoContent.classList.remove("hidden"); // Tampilkan foto
  setTimeout(() => {
    photoContent.classList.add("hidden"); // Sembunyikan foto setelah 5 detik
  }, 5000); // Durasi 5 detik
});