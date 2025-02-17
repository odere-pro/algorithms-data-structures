function caesarCipherEncryptor(string, key) {
  const LETTERS_COUNT = 26;
  const Z_LETTER_CODE = 122;
  let newKey = key % LETTERS_COUNT;
  let caesarEncryptor = "";
  for (let i = 0; i < string.length; i++) {
      let newCharCode = string.charCodeAt(i) + newKey;
      if (newCharCode <= Z_LETTER_CODE) {
        caesarEncryptor += String.fromCharCode(newCharCode);
      } else {
        caesarEncryptor += String.fromCharCode(Z_LETTER_CODE - LETTERS_COUNT + (newCharCode % Z_LETTER_CODE));
      }
  }
  return caesarEncryptor;
}
