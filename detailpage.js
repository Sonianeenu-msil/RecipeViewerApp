

var recipieDetailData = JSON.parse(localStorage.getItem('recipie')) || [];
// var recipeIndex = localStorage.getItem('recipeindex')
// var data = recipieDetailData[recipeIndex]

function getUrlParameter(name) {
    // name = name.replace(/[[]]/g, "\\$&");
    var url = window.location.href;
    var params = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split('=');
      if (param[0] === name) {
        return decodeURIComponent(param[1].replace(/\+/g, " "));
      }
    }
    return null;
  }
  
  var recipeIndexUrl = getUrlParameter('recipeIndex');
  
  var recipeUrl = recipieDetailData[recipeIndexUrl];
  

document.getElementById('recipe-image').src = recipeUrl.image;
document.getElementById('recipe-title').textContent = recipeUrl.name;
document.getElementById('recipe-description').textContent = recipeUrl.details;
