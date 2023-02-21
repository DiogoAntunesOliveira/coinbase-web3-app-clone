import sanityClient from '@sanity/client'

export const client = sanityClient(
    {
        projectId: '28kw2aub',
        dataset: 'production',
        apiVersion: '2023-02-18',
        token: 'skgREFtkkPJQxPjn65SUZa6TCjIHZ6X4nVhm7YHBfyBX0MKakehpzs2OxwbzvcTeJ4oWicbHxIYVek5xnvRuEixnzqmJESzBfC4koHV0fyP5sdVMvwIJDiLgwI4wGxT3APeXKZImdn2WuqrPEZbFlZq3KovkE4K3fpxk9BqjWZUjTRJDRAMn',
        useCdn: false
    }
)