export const kFormatter = (num) => {
    const formattedNumber = Math.floor(num)
      .toString()
      .split("")
      .reverse()
      .reduce((acc, digit, index) => {
        return digit + (index !== 0 && index % 3 === 0 ? " " : "") + acc;
      }, "");
  
    return `${formattedNumber} `;
  };
  
  
  