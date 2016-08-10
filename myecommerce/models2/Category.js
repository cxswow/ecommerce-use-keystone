var keystone = require('keystone')
var Types = keystone.Field.Types

var Category = new keystone.List('Category')

Category.add({
	name: {type: Types.Text, required: true,initial: true},
	parent: {type: Types.Relationship, ref: 'Category', initial: true},
	product: {type: Types.Relationship, ref: 'Product', many: true, index: true}
})
Category.trace = true
Category.defaultSort = '-createAt'
Category.defaultColumns = 'name, parent, createdAt, updatedAt'

Category.register()