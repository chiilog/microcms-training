import Link from 'next/link';
import { client } from '@/libs/client';
import { BlogProps } from '@/type/blog';

export default function Home({ blog }: { blog: BlogProps[] }) {
  return (
    <div>
      <ul>
        {blog.map((blog: BlogProps) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
