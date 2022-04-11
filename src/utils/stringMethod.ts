declare global {
    interface String {
      replaceText: (...valuesToPut: (string | number)[]) => string;
    }
  }
  
  String.prototype.replaceText = function (...valuesToPut) {
    let finalString = this as string;
    valuesToPut?.forEach((value, index) => {
      finalString = finalString.replaceAll(`{${index}}`, String(value));
    });
  
    return finalString;
  };
  
  export {};
  