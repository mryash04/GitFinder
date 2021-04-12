$(document).ready(function(){
    $("#inputUser").on("keyup", function(event){
        console.log(event.target.value);
        let username = event.target.value;

        $.ajax({
            url : `https://api.github.com/users/${username}`,
            type : "GET",
            dataType : "json",
            success : function(data){
                console.log(data);
                    $("#userProfile").html(`
                    <div class="card container">
                    <div class="card-title text-center font-weight-bold">
                    ${data.name}
                    </div>
                    <div class="card-body">
                    <div class="row">
                    <div class="col-lg-3 col-md-3 col-12">
                    <img src=${data.avatar_url} class="img-thumbnail img-fluid">
                    <p class="text-capatalize font-weight-bold mb-0">${data.name}</p>
                    <p class="text-capatalize">${data.login}</p>
                    <a href=${data.html_url} class="btn btn-primary d-block" target="_blank">View</a>
                    <p class="text-capatalize">${data.location}</p>
                    </div>
                    <div class="col-lg-9 col-md-9 col-12">
                    <span class="badge badge-pill badge-primary p-2">Public Repos: ${data.public_repos}</span>
                    <span class="badge badge-pill badge-secondary p-2">Public Gists : ${data.public_gists}</span>
                    <span class="badge badge-pill badge-success p-2">Followers : ${data.followers}</span>
                    <span class="badge badge-pill badge-danger p-2">Following : ${data.following}</span>
                    <p class="bg-info mt-2 p-2 rounded text-white">${data.bio}</p>
                    <p class="bg-success mt-2 p-2 rounded text-white">${data.company}</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    `)
            }
        });
    })
});