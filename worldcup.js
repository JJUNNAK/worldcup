
// 이상형 월드컵을 할 대상 이미지 Array
var ImgArray = [
    './img/A.jpg',
    './img/B.jpg',
    './img/C.jpg',
    './img/D.jpg',
    './img/E.jpg',
    './img/F.jpg',
    './img/G.jpg',
    './img/H.jpg'
];

// 파라미터로 받은 이미지 경로값으로 lmg태그의 src 값을 설정.
function setImage(leftSrc, rightSrc){
    let leftImg = document.getElementById("leftImg");
    let rightImg = document.getElementById("rightImg");
    leftImg.src = leftSrc; 
    rightImg.src = rightSrc; 
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // 0에서 i까지의 무작위 인덱스
      [array[i], array[j]] = [array[j], array[i]]; // 요소를 스왑
    }
    return array;
  } 






function imgClick(id){
    let img; // 삭제대상 이미지 경로

    // 선택된 이미지가 왼쪽인 경우 오른쪽 이미지의 src 값을 img 변수에 초기화
    // 선택된 이미지가 오른쪽인 경우 왼쪽 이미지의 src 값을 img 변수에 초기화
    if(id == "leftImg"){
        img = "./img/" + document.getElementById("rightImg").getAttribute("src").split("/").pop();
    } else if(id == "rightImg"){
        img = "./img/" + document.getElementById("leftImg").getAttribute("src").split("/").pop();
    }

    // ImgArray에서 img 값 삭제
    ImgArray = ImgArray.filter(item => item !== img);

    // 남은 이미지 수 >= 2 인 경우 : 이상형 월드컵 진행 상태
    // 남은 이미지 수 < 2 인 경우 : 결승전 완료 직후 상태
    if(ImgArray.length >= 2){
        ImgArray = shuffleArray(ImgArray);
        setImage(ImgArray[0],ImgArray[1]);
    }else if(ImgArray.length < 2){
      alert("끝");

      // 이전 화면 모두 지우기
      document.body.innerHTML = "";

      // HTML h1 태그 생성 후 text 변수에 저장.
      //text 변수 안에 저장된 h1 태그의 내용을 설정
      var text = document.createElement("h1");
      text.textContent = "당신의 이상형은!";

      // HTML에서 이미지를 나타내는 태그 생성 후 lastImg 변수에 저장.
      // 이미지 태그의 src(경로) 설정. 최종적으로 선택된 ImgArray 배열의 [0] 번째 경로 지정.
      var lastImg = document.createElement("img");
      lastImg.src = ImgArray[0]; 
      
      // 텍스트 및 이미지 태그를 body 요소에 추가 
      document.body.append(text, lastImg);

    }

}










