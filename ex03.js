function validateArguments(content, keyword) {
  const validContent = typeof content === "string" && content.length > 0;
  const validKeyword = typeof keyword === "string" && keyword.length > 0;
  return validContent && validKeyword;
}
function findAllIndexKeyword(content, keyword) {
  let lowerCaseContent = content.toLowerCase();
  const lowerCaseKeyword = keyword.toLowerCase();
  const keywordLength = keyword.length;
  const indexArr = [];
  let result = lowerCaseContent.indexOf(lowerCaseKeyword);
  while (true) {
    indexArr.push(result);
    lowerCaseContent = lowerCaseContent
      .split("")
      .splice(result + keywordLength)
      .join("");
    result = lowerCaseContent.indexOf(lowerCaseKeyword);
    if (result === -1) {
      break;
    }
  }
  return indexArr;
}
function highlightKeyword(content, keyword) {
  if (!validateArguments(content, keyword)) {
    return "Invalid";
  }
  const indexArr = findAllIndexKeyword(content, keyword);
  if (indexArr[0] === -1) {
    return content;
  }
  const keywordLength = keyword.length;
  const contentArr = content.split("");
  const tempArr = [];
  for (let i = 0; i < indexArr.length; i++) {
    let temp = contentArr.splice(0, indexArr[i] + keywordLength);
    const spliceKey = temp.splice(indexArr[i], keywordLength);
    temp = temp + "<strong>" + spliceKey + "</strong>";
    tempArr.push(temp);
  }
  tempArr.push(contentArr.join(""));
  return tempArr.join("").replaceAll(",", "");
}
console.log(
  highlightKeyword(
    "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
    "thú vị"
  )
);
