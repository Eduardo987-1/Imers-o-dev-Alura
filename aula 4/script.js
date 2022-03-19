//var listafilmes = ["Yesterday","A chegada","Escola de Rock"];
//listafilmes.push("Harry Potter");

//for (var i  = 0; i  < listafilmes.length;i++) {
  // document.write("<p>" + listafilmes[i] + "</p>");

//}

var listafilmes = ["https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
"https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
"https://upload.wikimedia.org/wikipedia/pt/1/1b/Schoolrockposter.jpg","https://static.wikia.nocookie.net/harrypotter/images/f/fb/PS_poster.jpg/revision/latest?cb=20180318153750"];

for(var i = 0;i < listafilmes.length;i++){
   document.write("<img src=" + listafilmes[i] + ">");
}