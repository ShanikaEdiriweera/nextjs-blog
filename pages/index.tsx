import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

// Static Site Generation
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Solutions-oriented professional with 5+ years of experience in designing and implementing highly scalable, highly performant, secure, and resilient enterprise systems while adhering to industry standards and best practices. Experienced in the full software lifecycle including requirement analysis, designing, developing, testing, deploying, and monitoring. Experienced in leading technical teams within fast-paced, complex, and technologically advanced settings to deliver high-quality products. Experienced in cultivating partnerships and building lasting relationships with all stakeholders while driving focusing on successful delivery.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}