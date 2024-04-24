

var recipie = JSON.parse(localStorage.getItem('recipie')) || [];
var currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
var userDataItem = JSON.parse(localStorage.getItem('usersData')) || [];

var initialRecipes = [
  {
    image: "https://www.ndtv.com/cooks/images/iStock.175173140.jpg",
    name: "Prawn Pie Recipe",
    ingredients: "Almost everything goes well with this creamy pie recipe. Prawn pie is super rich and is best for small portions as an appetizer at dinner parties.",
    details: "Heat the oil in a saucepan at medium heat. Add in the onion and cook until it turns golden. Add the cream and raise to high heat, until the sauce thickens a little. Keep stirring gently. Add in the prawns and seasoning. Now pour the prawn mixture into the pie dough and bake. First, thoroughly blend your salt and flour together in the food processor. Cut the butter into evenly-sized cubes, place them evenly on top of the dry ingredients in your food processor, and then mix in short bursts. Do this until the dough becomes clumpy and wet, and no flour remains. Now bring out the dough and place onto a heavily-floured surface. Add the cold water in, spoon by spoon, gently folding to make sure it is all absorbed.Then divide the dough into two portions (one for the bottom of the pie and one for the top) and roll both the pieces into discs. Wrap these discs separately in cling film and let them rest in the fridge for at least two hours.When you are ready to bake, bring out the dough and roll it out, in one direction, on a surface that has been heavily floured. Do this gently and do not flip it around too much like a chapati.Pour your filling into the dough and then unfurl the second disk in the same way to make a crust for the top. For a sweet pie, you can even make a wonderful criss-cross lattice design if you prefer. This may take a while.Now bring out the dough and place onto a heavily-floured surface. Add the cold water in, spoon by spoon, gently folding to make sure it is all absorbed.Lightly brush the egg on top the pastry (this egg wash will give your pastry that gorgeous golden glow), and cut four slits into the dough on the top.Your Prawn Pie is ready to serve."
  },
  {
    image: "https://www.ndtv.com/cooks/images/sticky-toffee-ice-cream-1500.jpg",
    name: "Sticky Toffee Pudding Recipe",
    ingredients: "A rich, moist cake dipped in a sticky sauce. It is best served warm with a dollop of vanilla ice cream.",
    details: "Preheat the oven to 190°C and butter a 1 1/2 litre / 6 cups capacity pudding dish.Combine the 1/2 cup of dark brown sugar with the flour in a large bowl. Add the baking powder to the mixture.Pour milk into a measuring jug, beat in the egg, vanilla and melted butter and then pour this mixture over the sugar and flour and stir it with a wooden spoon to combine. Fold in the dates and pour into the prepared pudding dish.Set the timer for 45 minutes. Check the top pudding. If it feel spongy and spring back when touched it is done.If it's not done in 45 minutes, keep it in the oven for 5 to 10 extra minutes.For the sauce: Put the 1 cup of dark brown sugar in a bowl and dot it with butter. Over this pour 2 cups of boiling water and put it the oven for 10-15 minutes to thicken it slightly.Pour sauce over the cake once ready and allow it to soak in.Serve at room temperature with vanilla ice cream or double cream if you prefer."
  },
  {
    image: "https://i.ndtvimg.com/i/2018-02/potatoes_660x330_41517906176.jpg",
    name: "Stuffed Jacket Potatoes",
    ingredients: "Lamb patties which melt in your mouth, and are quick and easy to make. Served hot with a crisp salad. ",
    details: "Deep fry whole potatoes in oil for 8-10 minutes or coat each potato with little oil.Rub with salt and bake until tender. Set aside to cool.Mix the onions, garlic, tomatoes and mushrooms. Add yoghurt, ginger, garlic, chillies, coriander, garam masala and methi leaves. Set aside for 1 hour.Cook mushroom mixture with marinade over a slow fire.Cut off a small circle from the narrow top of the potato.Scoop out the flesh to within an inch of the skin.Fill the cavity with the mushroom filling.Replace the potato caps and hold in place with a string."
  },
];

if (!localStorage.getItem('recipie')) {
  localStorage.setItem('recipie', JSON.stringify(initialRecipes));
}

var favRecipeData = JSON.parse(localStorage.getItem('favRecipeData')) || [];
localStorage.removeItem('favRecipeData')
function populateRecipes() {
  var recipeList = document.getElementById("recipe-list");
  recipie.forEach(function(recipe, index) {
    var li = document.createElement("li");
    li.classList.add("recipe-item");
    var img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.name;
    var h2 = document.createElement("h2");
    h2.textContent = recipe.name;
    var p = document.createElement("p");
    p.textContent = recipe.ingredients;
    var viewButton = document.createElement('button');
    viewButton.textContent = "View Recipe";
    viewButton.addEventListener('click', function() {
      window.location.href = ""
      window.location.href = "detailpage.html?recipeIndex=" + index;
    });
    var addToFav = document.createElement('button')
    addToFav.textContent = currentUser.favRecipeData.some(favRecipe => favRecipe.name === recipe.name && favRecipe.image === recipe.image) ? "Remove From Favorites" : "Add To Favorites";
    addToFav.addEventListener('click', function() {
      currentUser.favRecipeData = currentUser.favRecipeData || [];
      if (currentUser.favRecipeData.some(favRecipe => favRecipe.name === recipe.name && favRecipe.image === recipe.image)) {
        currentUser.favRecipeData = currentUser.favRecipeData.filter(favRecipe => favRecipe.name !== recipe.name || favRecipe.image !== recipe.image);
        addToFav.textContent = "Add To Favorites";
      } else {
        currentUser.favRecipeData.push(recipe);
        addToFav.textContent = "Remove From Favorites";
      }
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      var index = userDataItem.findIndex(user => user.username === currentUser.username && user.password === currentUser.password);
      if (index !== -1) {
        userDataItem[index] = currentUser;
        localStorage.setItem('usersData', JSON.stringify(userDataItem));
      }
      // if (favRecipeData.some(favRecipe => favRecipe.name === recipe.name && favRecipe.image === recipe.image)) {
      //   favRecipeData = favRecipeData.filter(favRecipe => favRecipe.name !== recipe.name || favRecipe.image !== recipe.image);
      //   addToFav.textContent = "Add To Favorites";
      // } else {
      //   favRecipeData.push(recipe);
      //   addToFav.textContent = "Remove From Favorites";
      // }
      // localStorage.setItem('favRecipeData', JSON.stringify(favRecipeData));
    });
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(viewButton);
    li.appendChild(addToFav)
    recipeList.appendChild(li);
  });
}

var ShowFavRecipe = document.getElementById('show-favorites-button')
ShowFavRecipe.addEventListener('click', function() {
  window.location.href = "favrecipe.html";
})

var logout = document.getElementById('logout-button')
logout.addEventListener('click', function() {
  window.location.href = "Login.html";
})

var addRecipes = document.getElementById('add-recipes')
addRecipes.addEventListener('click', function(){
  window.location.href = "addrecipes.html"
})
populateRecipes();

