
const allPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // console.log(data.posts);
    const postContainer = document.getElementById('post-container');
    data.posts.forEach((post) => {
        // console.log(post);

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="hero justify-start ">
                    <div class="flex gap-6 items-center lg:w-[600px] px-3 bg-base-200 rounded-2xl lg:mb-20 flex-col lg:flex-row">
                        <div class="indicator ">
                            <span class="indicator-item badge bg-green-400 rounded-full"></span> 
                            <div class="grid w-32 h-32 bg-base-300 rounded-xl place-items-center"><img class=" rounded-xl" src="${post.image} " alt=""> </div>
                          </div>
                      <div>
                        <div class="font-inter flex gap-8">
                            <h6>#${post.category} </h6>
                            <p>Author: ${post.author.name} </p>
                        </div>
                        <h1 class="text-xl font-bold">${post.title} </h1>
                        <p class="py-6 font-inter">${post.description} </p>
                        <hr class="border-dashed text-xl mb-6">
                        <div class="flex items-center justify-between">
                            <div class="flex gap-4">
                                <div class="flex items-center gap-4">
                                    <img src="images/sms.png" alt="">
                                    <p>${post.comment_count}</p>
                                </div>
                                <div class="flex items-center gap-4">
                                    <img src="images/eye1.png" alt="">
                                    <p>${post.view_count} </p>
                                </div>
                                <div class="flex items-center gap-4">
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

// allPost();
