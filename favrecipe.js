
function showFavoriteRecipes() {
    var favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = "";
    var currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    var favRecipeArray = currentUser.favRecipeData || [];
    if (favRecipeArray.length == 0) {
        var emptyLabel = document.createElement('label')
        emptyLabel.textContent = "No favourite recipes added"
        favoritesList.appendChild(emptyLabel)
    }
    favRecipeArray.forEach(function(recipe) {
        var li = document.createElement("li");
        li.classList.add("favorite-item");
        var img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;
        var h2 = document.createElement("h2");
        h2.textContent = recipe.name;
        li.appendChild(img);
        li.appendChild(h2);
        favoritesList.appendChild(li);
    });
}

showFavoriteRecipes();

