import Head from "next/head";
import Hero from "../component/hero";
import Stats from "../component/stats";
import FeaturesTop from "../component/features-top";
import WhatIsTotc from "../component/what-is-totc";
import ClassroomShowcase from "../component/classroom-showcase";
import OurFeatures from "../component/our-features";
import CourseExplorer from "../component/course-explorer";
import Testimonial from "../component/testimonial";
import NewsResources from "../component/news-resources";

export default function Home() {
  return (
    <>
      <Head>
        <title>TOTC - Studying Online Is Now Much Easier</title>
        <meta
          name="description"
          content="TOTC is an interactive platform that helps educators create online classes, manage assignments, and track student progress all in one place."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Stats />
      <FeaturesTop />
      <WhatIsTotc />
      <ClassroomShowcase />
      <OurFeatures />
      <CourseExplorer />
      <Testimonial />
      <NewsResources />
    </>
  );
}