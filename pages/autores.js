import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AutoresLayout'

export async function getStaticProps() {
  const authorDetailsCilenalopes = await getFileBySlug('authors', 'cilenalopes')
  const authorDetailsRodrigopeixoto = await getFileBySlug('authors', 'rodrigopeixoto')

  return {
    props: {
      authorDetailsCilenalopes,
      authorDetailsRodrigopeixoto,
    },
  }
}

export default function Autores({ authorDetailsCilenalopes, authorDetailsRodrigopeixoto }) {
  const { mdxSource: mdxSourceCilenalopes, frontMatter: frontMatterCilenalopes } =
    authorDetailsCilenalopes
  const { mdxSource: mdxSourceRodrigopeixoto, frontMatter: frontMatterRodrigopeixoto } =
    authorDetailsRodrigopeixoto

  return (
    <>
      <h1></h1>
      <MDXLayoutRenderer
        layout={frontMatterRodrigopeixoto.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSourceRodrigopeixoto}
        frontMatter={frontMatterRodrigopeixoto}
      />

      <h1></h1>
      <MDXLayoutRenderer
        layout={frontMatterCilenalopes.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSourceCilenalopes}
        frontMatter={frontMatterCilenalopes}
      />
    </>
  )
}
