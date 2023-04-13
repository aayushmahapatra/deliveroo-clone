export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category',
    },
  ],
}
