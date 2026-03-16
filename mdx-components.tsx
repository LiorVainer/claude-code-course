import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'mdx/types'

export const useMDXComponents = (components?: MDXComponents) => ({
  ...getDocsMDXComponents(),
  // Ensure code blocks render LTR inside RTL pages
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
    <pre dir="ltr" {...props} />
  ),
  ...components,
})
