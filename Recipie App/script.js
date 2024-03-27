


const recipieListContainer = document.querySelector(".recipie-list");
const loader = document.querySelector(".loader");





async function fetchListRecipie() {
    const response = await fetch('https://dummyjson.com/recipes', {
        method: 'GET'
    })

    const result = await response.json();
    console.log(result)



    if (result && result.recipes && result.recipes.length > 0) displayRecipieList(result.recipes)

}

function displayRecipieList(getRecipeList) {
    getRecipeList.forEach(recipieItem => {

        const { name, id, image, cuisine, ingredients, mealType, rating, tags, instructions } = recipieItem;

        const recipieitemWrapper = document.createElement("div");
        recipieitemWrapper.classList.add('recipie-item');

        const recipieName = document.createElement('p');
        recipieName.textContent = name;
        recipieName.classList.add('recipie-name');
        
        const hrElement = document.createElement('hr')
        hrElement.style.marginTop = '10px';
        hrElement.style.color = 'black';

        recipieName.appendChild(hrElement);

        const recipieImg = document.createElement('img');
        recipieImg.src = image;
        recipieImg.classList.add('recipie-image');


        //cuisine

        const recipiecuisine = document.createElement('p');
        recipiecuisine.textContent = cuisine;
        recipiecuisine.classList.add('recipie-cuisine');


        //inegredients

        const recipieingredients = document.createElement('div');
        recipieingredients.textContent = ingredients.map(item => item).join(',');
        recipieingredients.classList.add('recipie-ingredients');

        //instructions
        // const recipieinstruction = document.createElement('div');
        // recipieinstruction.textContent = instructions.map(item => item).join(',');
        // // const first20Words = instructions.slice(0, 20).join(' ');
        // // recipieinstruction.textContent = first20Words;
        // recipieinstruction.classList.add('recipie-instruction');


        //mealtype

        const recipiemealtype = document.createElement('p');
        recipiemealtype.textContent = mealType;
        recipiemealtype.classList.add('recipie-meal-type');


        //rating

        const recipieRating = document.createElement('p');
        recipieRating.textContent = rating;
        recipieRating.classList.add('recipie-rating');

        //tag

        const recipieTag = document.createElement('p');
        recipieTag.textContent = tags;
        recipieTag.classList.add('recipie-tags');

        //recipieDetails button

        const recipieDetailsbutton = document.createElement('button');
        recipieDetailsbutton.classList.add('recipie-details-button');
        recipieDetailsbutton.innerText = "Recipie Details";
        recipieDetailsbutton.addEventListener("click", () => {
            console.log('Show Recipie Details');
        })

        recipieitemWrapper.appendChild(recipieImg);
        recipieitemWrapper.appendChild(recipieName);
        recipieitemWrapper.appendChild(recipiecuisine);
        recipieitemWrapper.appendChild(recipieingredients);
        // recipieitemWrapper.appendChild(recipieinstruction);
        recipieitemWrapper.appendChild(recipiemealtype);
        recipieitemWrapper.appendChild(recipieRating);
        recipieitemWrapper.appendChild(recipieTag);
        recipieitemWrapper.appendChild(recipieDetailsbutton);


        // recipieListContainer.appendChild(recipieitemWrapper);
        recipieListContainer.appendChild(recipieitemWrapper);



    });
}
fetchListRecipie();



