var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User',{
	track: {updatedAt: true,createdAt: true}
});

User.add({
	name: { type: Types.Text, initial: true, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true,unique: true},
	password: { type: Types.Password, initial: true, required: true },
	address: {type: Types.Text, initial: true},
	phone: {type: Types.Number, initial: true}
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});

/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin, address ,phone, updatedAt, createdAt';
User.register();