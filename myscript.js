function genIns(keywords){
  return "<ins class='dcmads' style='display:inline-block;width:300px;height:250px'data-dcm-placement='N5972.128431.2350512363521/B8050250.114953125'data-dcm-click-tracker='~CLICK_ENCODE~%26redirect%3D'data-dcm-keywords='"+ keywords +"'data-dcm-rendering-mode='iframe'> <script src='http://www.googletagservices.com/dcm/dcmads.js'></script> </ins>";
}

function insertIns(keywords){
  html = genIns(keywords);
  postscribe(document.body, html);
  return;
}

function callAPI(){
  script = document.createElement('script');
  script.src = "http://m.xp1.ru4.com/cd?_o=37280556&_t=instest&redirect=http://sanjose.ubertags.com:12345/keyword?callback=insertIns&keyword=~dec~"
  document.head.appendChild(script);
  return;
}

window.setInterval(function(){callAPI();}, 3000);

