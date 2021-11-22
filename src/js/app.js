export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const buffer16Arr = new Uint16Array(this.buffer);
    return String.fromCharCode(...buffer16Arr);
  }
}

//  function getBuffer() {
//   const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
//   return ((input) => {
//     const buffer = new ArrayBuffer(data.length * 2);
//     const bufferView = new Uint16Array(buffer);
//     for (let i = 0; i < input.length; i += 1) {
//       bufferView[i] = input.charCodeAt(i);
//     }
//     return buffer;
//   })(data);
// }

// const newBuff = new ArrayBufferConverter();
// newBuff.load(getBuffer());
// console.log(newBuff.buffer);

// console.log(newBuff.toString());
