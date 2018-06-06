var wordToCipher = prompt('Digite abaixo o texto a ser cifrado:');

if(wordToCipher !== '') {
  for(letter of wordToCipher) {
    if(!isNaN(letter)) {
      alert('O texto deve conter somente letras.')
    }
  }
  cipher(wordToCipher);
}

function cipher(wordToCipher) {

  var alphabetNormal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var alphabetASCII = [];

  for(i = 0; i < alphabetNormal.length; i++) {
    if(alphabetNormal[i + 7] === undefined) {
      alphabetASCII[i] = alphabetNormal[7 - (alphabetNormal.length- i)];
    } else {
      alphabetASCII[i] = alphabetNormal[i + 7];
    }
  }

  var wordCiphed = [];
  for(i = 0; i < wordToCipher.length; i++) {
    if(wordToCipher[i] === wordToCipher[i].toUpperCase()) {
      wordCiphed[i] = alphabetASCII[alphabetNormal.indexOf(wordToCipher[i].toLowerCase())].toUpperCase();
    } else {
      wordCiphed[i] = alphabetASCII[alphabetNormal.indexOf(wordToCipher[i])];
    }
  }
  alert('O texto cifrado é: \n' + wordCiphed.join(''));
}


var wordToDecipher = prompt('Agora, digite o texto a ser decifrado:');

if(wordToDecipher !== '') {
  for(letter of wordToDecipher) {
    if(!isNaN(letter)) {
      alert('O texto deve conter somente letras.')
    }
  }
  decipher(wordToDecipher);
}

function decipher(wordToDecipher) {

  var alphabetNormal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var alphabetASCII = [];

  for(i = 0; i < alphabetNormal.length; i++) {
    if(alphabetNormal[i + 7] === undefined) {
      alphabetASCII[i] = alphabetNormal[7 - (alphabetNormal.length- i)];
    } else {
      alphabetASCII[i] = alphabetNormal[i + 7];
    }
  }

  var wordDeciphed = [];
  for(i = 0; i < wordToDecipher.length; i++) {
    if(wordToDecipher[i] === wordToDecipher[i].toUpperCase()) {
      wordDeciphed[i] = alphabetNormal[alphabetASCII.indexOf(wordToDecipher[i].toLowerCase())].toUpperCase();
    } else {
      wordDeciphed[i] = alphabetNormal[alphabetASCII.indexOf(wordToDecipher[i])];
    }
  }
  alert('O texto descifrado é: \n' + wordDeciphed.join(''));
}