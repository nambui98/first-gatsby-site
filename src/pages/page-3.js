import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import SEO from '../components/seo';
const ThridPage = () => (
	<Layout>
		<SEO title="Page 3" />

		<h1>Third Page</h1>
		<p>This is my first Gtasby site</p>
		<Link to="/page-2/">Back to Page 2</Link>
		<br />
		<Link to="/">Go back to the homepage</Link>
	</Layout>
);

export default ThridPage;
