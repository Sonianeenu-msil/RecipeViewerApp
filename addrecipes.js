function addRecipeData() {
    var imagesrc = document.getElementById('addimage').value
    var title = document.getElementById('addtitle').value
    var descriptionText = document.getElementById('add-description').value
    var detailText = document.getElementById('adddetails').value
    var recipeDummy = JSON.parse(localStorage.getItem('recipie')) || []
    var userInput = {
        image: imagesrc,
        name: title,
        ingredients: descriptionText,
        details: detailText
    }
    recipeDummy.push(userInput)
    localStorage.setItem('recipie', JSON.stringify(recipeDummy))
}

var addRecipe = document.getElementById('addSubmit')
addRecipe.addEventListener('click', function() {
    addRecipeData()
    window.location.href = "home.html"
})