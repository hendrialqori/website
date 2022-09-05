---
id: 1
title: 'Teknikal test: Reverse Digit dan Fizzbuzz'
tags: ['Coding test', 'Javascript']
created: '4 september 2022'
read: '15 menit baca'
highlight: 'Postingan kali in akan membahasan 2 topik yang sering keluar saat Teknikal test interview'
slug: 'teknikal-test-reverse-digit-fizzbuzz'
---

Dalam dunia per-Software Engineer-an tidak bisa terlepas dari algorima dan data struktur, terlebih lagi untuk pada calon developer.
Mereka akan di test kemampuannya untuk menyelesaikan beberapa soal dalam kurun waktu yang sudah di tetapkan, kali ini soal-soal akan di selesaikan menggunakan bahasa pemrograman Javascript/Node.
<br />
- **Reverse digits**
- **Fizzbuzz**
<br />

## 1. Reverse digits
Reverse Digits atau membalikan suatu angka, Dalam kasus ini user meminta kita untuk membalikan suatu parameter yang di berikan entah itu dari parameter sebuah function atau dari command line/readline pada node js, Les't resolved  !!
<br />

#### Cara pertama

```js
//reverse.js

const reverse = (params) => {

  let container = []

  for(let i = params.length; i > 0; i -= 1) {
    container.push(params[i - 1])
  }
 
 return container.join('')

}

const r = reverse('tricky-blog')
console.log(r)

```

output
```bash 
golb-ykcirt 
```
<br />

##### Penjelasan
Pada baris pertama, kita inisialisasi sebuah fungsi yang terdapat sebuah parameter yang terdapat variabel container, yang bermaksud untuk menyimpan hasil reverse looping nantinya. Melakukan looping selama panjang parameter dan di lakukan secara terbalik dan di tambahkan pada variabel container yang berupa **array**. Jika proses looping sudah selesai dan berhasil di simpan pada variabel container, Lakukan penggabungan dengan metode **.join**.

<br />

#### Cara kedua

```js
//reverse.js

const reverse = (params) => {

 return params.split('').reverse().join('')

}

const r = reverse('tricky-blog')
console.log(r)

```

output
```bash 
golb-ykcirt 
```
<br />

##### Penjelasan
Cara kedua ini cukup simpel, hanya dengan menggabungkan 3 method array. **.split** method untuk meng-convert ke array. **.reverse** sesuai namanya method ini untuk memutar array dari urutan depan ke belakang, menjadi belakang ke depan.
**.join** method ini untuk meng-convert array ke string.
<br />


## 2. Fizzbuzz
Sederhana nya fizzbuzz sendiri adalah sebuah permainan angka atau menghitung yang mana, jika sebuah angka di bagi 3 hasil nya 0 maka print **Fizz** jika 5 print **Buzz** dan jika habis di bagi 3 dan 5 makan print **Fizzbuzz**. Biasa nya soal ini di kombinasikan dengan perulangan **For**, let's resolve !!
<br/>

```js  
// fizzBuzz.js
const fizzBuzz = (params) => {
  for(let i = 0; i < params ; i ++) {
    if(i % 3 === 0 && i % 5 === 0 ) console.log('Fizzbuzz')
    else if(i % 3 === 0) console.log('Fizz')
    else if(i % 5 === 0) console.log('Buzz')
    else console.log(i)
  }
}

fizzBuzz(100)

```
<br />

Dua soal di atas hanya sebagian dari banyak nya teknikal test seorang calon developer,
Kedepan nya saya akan membuat lagi materi tentang teknikal test ini.  
**Semoga bermanfaat**.