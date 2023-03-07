

function OnMyPageClick(info,tab){
      console.log("Clicked on Page:",info,tab);
}

function OnMyPageClick(info,tab){
      console.log("Clicked on Image:",info,tab);
}


chrome.contextMenus.create({
     "title":"Share Page",
     "contexts":["page"],
     "onclick":OnMyPageClick

})

chrome.contextMenus.create({
     "title":"Share Image",
     "contexts":["image"],
     "onclick":OnMyImageClick

})