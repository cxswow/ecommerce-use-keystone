var keystone = require('keystone')
var Types = keystone.Field.Types

var Order = new keystone.List('Order')

Order.add({
	user: {type: Types.Relationship, ref: 'User', many: false, required: true,index: true, initial: true},
	products: {type: Types.Relationship, ref: 'CartItem', many: true, unique: true},
	totalprice: {type: Types.Money, required: true, default: 0},
	address: {type: Types.Text, required: true, default: '', initial: true},
	phone: {type: Types.Number, required: true, default: '', initial: true},
	finish: {type: Types.Boolean, default:false, initial:true}
})

Order.track = true
Order.defaultSort = '-createAt'
Order.defaultColumns = 'finish, address, phone, totalprice, createdAt, updatedAt'

Order.register()