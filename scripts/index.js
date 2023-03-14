// Script for index.html (Drop Down menu)

// Projects list hide-unhide functionprojects
function projects_HU () {
    if (projects_img.classList.contains('drop-down-img')) {
        projects_img.classList.remove('drop-down-img');
        projects_img.classList.add('drop-up-img');
        projects_list.classList.remove('hidden');
    }
    else {
        projects_img.classList.add('drop-down-img');
        projects_img.classList.remove('drop-up-img');
        projects_list.classList.add('hidden');
    }
}

// Blogs list hide-unhide function
function blogs_HU () {
    if (blogs_img.classList.contains('drop-down-img')) {
        blogs_img.classList.remove('drop-down-img');
        blogs_img.classList.add('drop-up-img');
        blogs_list.classList.remove('hidden');
    }
    else {
        blogs_img.classList.add('drop-down-img');
        blogs_img.classList.remove('drop-up-img');
        blogs_list.classList.add('hidden');
    }
}


// Projects menu dropdown
projects_button = document.getElementById('my-projects-heading');
projects_img = document.getElementsByClassName('my-projects-img')[0];
projects_list = document.getElementsByClassName('my-projects-list')[0];

// Blogs menu dropdown
blogs_button = document.getElementById('my-blogs-heading');
blogs_img = document.getElementsByClassName('my-blogs-img')[0];
blogs_list = document.getElementsByClassName('my-blogs-list')[0];


projects_button.addEventListener('click' , projects_HU);
blogs_button.addEventListener('click' , blogs_HU);