
const searchPost = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    // console.log(data.posts);


}


const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPost(searchText);
}


const loadPost = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText} `);
    const data = await res.json();
    // console.log();
    const posts = data.posts;
    // console.log(posts);
    displayPost(posts);
}

const displayPost = dPost => {
   console.log(dPost);
   const postContainer = document.getElementById('post-container');
//    clear post container
postContainer.textContent = '';
   dPost.forEach(post => {
    // console.log(post);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class=" justify-start"> 
                        <div class="flex gap-6 items-center lg:w-[600px] px-3 bg-base-200 rounded-2xl lg:mb-20 flex-col lg:flex-row">
                            <div class="indicator ">
                                <span class="indicator-item badge bg-green-400 rounded-full"></span> 
                                <div class="grid w-32 h-32 bg-base-300 rounded-xl place-items-center"><img src="${post.image}" class=" rounded-xl" alt=""> </div>
                              </div>
                          <div>
                            <div class="font-inter mt-6 flex gap-8">
                                <h6>#${post.category} </h6>
                                <p>Author :${post.author.name} </p>
                            </div>
                            <h1 class="text-xl font-bold">${post.title} </h1>
                            <p class="py-6 font-inter">${post.description} </p>
                            <hr class="border-dashed text-xl mb-6">
                            <div class="flex justify-between">
                                <div class="flex mb-6 gap-4">
                                    <div class="flex gap-4">
                                        <img src="images/sms.png" alt="">
                                        <p>${post.comment_count} </p>
                                    </div>
                                    <div class="flex gap-4">
                                        <img src="images/eye1.png" alt="">
                                        <p>${post.view_count}</p>
                                    </div>
                                    <div class="flex gap-4">
                                        <img src="images/time.png" alt="">
                                        <p>${post.posted_time}min</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="images/Vector.png" alt="">
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
     `;
     postContainer.appendChild(div);
   })
}


const btnClick = async (titles, views) => {
    console.log(titles, views);
}

const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data);
    const latestPost = document.getElementById('latest-post');
    data.forEach((item) => {
        // console.log(item);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="${item.cover_image} " alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="text-[#12132D99] flex gap-2 items-center">
                            <img src="images/date.png" alt="">
                            <p class="text-base">${item?.author?.posted_date ? item.author.posted_date : 'No publish date'} </p>
                        </div>
                      <h2 class="card-title text-[#12132D] font-extrabold text-lg">${item.title} </h2>
                      <p class="text-[#12132D99]">${item.description.slice(0, 100)} </p>
                      <div class="flex gap-4 items-center">
                        <img class=" w-12 h-12 rounded-full" src="${item.profile_image} " alt="">
                        <div>
                            <h4 class="font-bold text-base">${item.author.name} </h4>
                            <p class="text-[#12132D99]">${item?.author?.designation ? item.author.designation : 'Unknown'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
         `;
        latestPost.appendChild(div);
    })
}

searchPost();
handleSearch();
// allPost();
// displayPost();
// loadPost();
latestPost();
