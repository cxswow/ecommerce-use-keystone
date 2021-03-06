# 电商需求

## 总体要求

基于node的keystone。

## 功能需求

### 用户

注册：邮箱注册，密码长度6-20。

登录：与服务端验证登录。

查看、修改个人信息：姓名、地址、手机可修改，邮箱可查看。

查看订单：分页显示订单，只分完成和未完成，未完成可以确认收货。

购物车：待购买的商品，显示商品基本信息，可删除、修改数量，付款成功生成新的待发货订单，付款成功则从购物车中删除。

### 商品

搜索：可根据商品名搜索商品。（现在还没有）

商品分类：可定制管理，最多分两级。

商品信息：包含最多1张图，可查看商品名称、单价、详细信息（md）。

### 其它说明

付款：无实际付款，由后台自行随意处理。

页面：应至少包含：主页、分类显示商品页、查看单个商品详情页、个人页面(包含修改个人信息、订单查看等)。

# 程序运行

进入到myecommerce目录下，执行`npm install`，再执行`node myecommerce.js`（记得开mongodb）。

需要注意的是商品用到的图片用的是Cloudinary，需要配置Cloudinary，这里是在myecommerce.js里配置的，参见[Cloudinary配置](http://keystonejs.com/docs/configuration/#services-cloudinary)。

默认管理员账号：user@keystonejs.com  密码：admin

[keystone文档](http://keystonejs.com/docs/)
