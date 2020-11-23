import Head from 'next/head';
import { getAllSlugs } from '../../lib/blog';
import Link from 'next/link';

function Index ({ slugs }) {
    return (
        <ul>
            {slugs.map(slug => (
                <li key={slug}>
                    <Link href={`/blog/${slug}`}>{ slug }</Link>
                </li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
    return {
        props: {
            slugs: getAllSlugs(),
        },
    };
}

export default Index;