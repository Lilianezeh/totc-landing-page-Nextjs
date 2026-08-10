import React from "react";
import Image from "next/image";

const smallArticles = [
  {
    image: "/images/press-release.png",
    tag: "PRESS RELEASE",
    title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    text: "Class Technologies Inc., the company that created Class...",
  },
  {
    image: "/images/zoom.png",
    tag: "NEWS",
    title: "Zoom's earliest investors are betting millions on a better Zoom for schools",
    text: "Zoom was never created to be a consumer product. Nonetheless, the...",
  },
  {
    image: "/images/former-blackboard.png",
    tag: "NEWS",
    title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    text: "This year, investors have reaped big financial returns from betting on Zoom...",
  },
];

const NewsResources = () => {
  return (
    <section className="px-6 md:px-32 py-20 text-center">
      <h2 className="text-2xl font-bold mb-2">
        Latest <span className="text-[#49BBBD]">News</span> and Resources
      </h2>
      <p className="text-sm text-gray-500 mb-12">
        See the developments that have occurred to TOTC in the world
      </p>

      <div className="grid md:grid-cols-2 gap-10 text-left">
        {/* Large featured article */}
        <div>
          <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
            <Image
              src="/images/latest-news.png"
              alt="Person working on laptop"
              fill
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#49BBBD] text-white text-[10px] font-semibold px-2 py-1 rounded">
              NEWS
            </span>
          </div>
          <h3 className="font-bold mb-2">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <a href="#" className="text-sm font-semibold underline text-[#252641]">
            Read more
          </a>
        </div>

        {/* 3 small articles */}
        <div className="flex flex-col gap-6">
          {smallArticles.map((article) => (
            <div key={article.title} className="flex gap-4">
              <div className="relative w-24 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-1 left-1 bg-[#49BBBD] text-white text-[8px] font-semibold px-1.5 py-0.5 rounded">
                  {article.tag}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{article.title}</h4>
                <p className="text-xs text-gray-500">{article.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsResources;