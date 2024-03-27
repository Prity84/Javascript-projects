const userList = document.querySelector('.user-lists');

const loader = document.querySelector('.loader');

const scrollTopButton = document.querySelector('.scroll-to-top-button');

const scrollDownButton = document.querySelector('.scroll-to-button');


function showLoader() {
    loader.classList.add('showloader');
    userList.classList.add('hide-users-list')


}

function removeLoader() {
    loader.classList.remove('showloader')
    userList.classList.add('hide-users-list')

}

async function fetchUsersList() {
    showLoader();

    const response = await fetch('https://dummyjson.com/users', {
        method: 'GET'
    })
    const result = await response.json();

    if (result && result.users) displayUserList(result.users)
    console.log(result);
    // console.log(response)


    removeLoader();
}

function displayUserList(getUsers) {
    console.log(getUsers);

    userList.innerHTML = getUsers.map(userItem =>
        `<li>${userItem.firstName} ${userItem.lastName}  ${userItem.phone}</li>`

    )
        .join(" ");

}
fetchUsersList();

scrollTopButton.addEventListener('click', ()=>{
    // window.scrollTo(0,0);

    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});

scrollDownButton.addEventListener('click',()=>{
    console.log(document.body.scrollHeight);

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:'smooth'
    })
})