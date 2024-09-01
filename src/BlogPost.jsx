import React from 'react';
import '../src/components/Badge.css'

const BlogPost = () => {
  const data = {
    header: {
      title: "Our Blog",
      searchPlaceholder: "Search articles"
    },
    posts: [
      {
        title: "How to get the Spotify Refresh Token",
        date: "July 11, 2022",
        views: "views",
        description: "Getting the Spotify Refresh Token doesn't need to be a hassle any longer.",
        tags: ["spotify", "hacks"],
        link: "/blog/spotify-refresh-token",
        tagLinks: ["/tags/spotify", "/tags/hacks"]
      },
      {
        title: "How to get the Spotify Refresh Token",
        date: "July 11, 2022",
        views: "views",
        description: "Getting the Spotify Refresh Token doesn't need to be a hassle any longer.",
        tags: ["spotify", "hacks"],
        link: "/blog/spotify-refresh-token",
        tagLinks: ["/tags/spotify", "/tags/hacks"]
      }
      // Add more posts here
    ]
  };

  return (
    <main className="mb-auto mt-10 font-poppins">
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {data.header.title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              placeholder={data.header.searchPlaceholder}
              className="block w-full rounded-md border border-gray-400 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {data.posts.map((post, index) => (
            <a
              key={index}
              className="group mt-5 flex rounded-2xl bg-[rgba(255,255,255,.02)] px-2 transition duration-100 hover:scale-105 hover:rounded-2xl hover:bg-[rgba(255,255,255,.08)]"
              href={post.link}
            >
              <li className="py-7">
                <article className="space-y-2 p-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
                  <dl>
                    <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-07-12T00:00:00.000Z">{post.date}</time> • <span className="mx-1">–––</span>{post.views}
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-4">
                    <div className="space-y-1">
                      <div>
                        <h1 className="text-2xl font-bold leading-8 tracking-tight">
                          
                            {post.title}
                        </h1>
                      </div>
                      <div className="flex flex-wrap">
                        {post.tags.map((tag, tagIndex) => (
                          <a
                            key={tagIndex}
                            className="mt-2 mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out text-white"
                            href={post.tagLinks[tagIndex]}
                          >
                            {tag}
                          </a>
                        ))}
                      </div>
                      <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                        {post.description}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default BlogPost;
