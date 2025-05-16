fetch('../json/services.json')
.then(response => response.json())
.then(data => {
    services = data;
})
.catch(error => {
    console.error('Erreur lors du fetch :', error)
});

function create_article() {

}