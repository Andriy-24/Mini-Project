let url = new URL(location.href)
let urlJson = url.searchParams.get('id')
let id = JSON.parse(urlJson)
let Users = document.getElementById('Users')
fetch('https://jsonplaceholder.typicode.com/users/'+id)
.then(value => value.json())
.then(user => {
        let divId = document.createElement('div')
        divId.innerText = 'Id: '+ user.id
        let divName = document.createElement('div')
        divName.innerText = 'Name: ' + user.name
        let divUsername = document.createElement('div')
        divUsername.innerText = 'Username: ' + user.username
        let divEmail = document.createElement('div')
        divEmail.innerText = 'Email: ' + user.email
        let divAddress = document.createElement('div')
        divAddress.classList.add('divAddress')
        divAddress.innerText = `Address:
               Street: ${user.address.street}
               Suite:  ${user.address.suite}
               City:  ${user.address.street}
               Zipcode: ${user.address.street}
               Geo: 
                   lat:  ${user.address.geo.lat} lng: ${user.address.geo.lng}`
        let divPhone = document.createElement('div')
        divPhone.innerText = 'Phone: ' + user.phone
        let divWebsite = document.createElement('div')
        divWebsite.innerText = 'Website: ' + user.website
        let divCompany = document.createElement('div')
        divCompany.classList.add('divCompany')
        divCompany.innerText = `Company:
            Name: ${user.company.name}
            CatchPhrase: ${user.company.catchPhrase}
            Bs: ${user.company.bs}`
    Users.append(divId,divName,divUsername,divEmail,divAddress,divPhone,divWebsite,divCompany)
})
let button = document.getElementById('butt')
button.addEventListener("click", function (){
    this.disabled = true
})
button.innerText = 'post of current user';
button.onclick = function (){

    fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
        .then(value => value.json())
        .then(posts => {
            let divTitleMain = document.createElement('div')
            divTitleMain.classList.add('divTitleMain')
            for (const post of posts) {
                let divTitle = document.createElement('div')
                divTitle.classList.add('divTitle')
                let a = document.createElement('a')
                a.innerText = post.title
                a.href = '../posts-details/posts-details.html?postId=' + post.id;
                divTitle.appendChild(a)
                divTitleMain.appendChild(divTitle)
            }
            document.body.appendChild(divTitleMain)
        })
}