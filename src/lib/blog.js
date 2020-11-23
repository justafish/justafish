import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { parseISO, format } from 'date-fns';

const blogDirectory = join(process.cwd(), 'src', 'blog');

const getBySlug = (slug) => {
    const file = fs.readFileSync(join(blogDirectory, `${slug}.md`), 'utf8');
    const { data, content } = matter(file);
    const dateMatch = slug.match(/(?<date>\d{4}-\d{2}-\d{2})-.+/);
    const date = format(parseISO(dateMatch.groups.date), 'do LLLL, y');
    return {
        slug,
        frontmatter: data,
        date,
        title: data.title,
        content,
    };
};

const getAllSlugs = () => {
    const slugs = fs.readdirSync(blogDirectory);
    return slugs.map(slug => `${slug.substr(0, slug.indexOf('.md'))}`);
};

export { getBySlug, getAllSlugs };