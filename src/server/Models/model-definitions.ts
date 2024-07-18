import getDBConnection from "../db-connection/dbConnection";
import { AdminUserSchema } from "./schemas/AdminUserSchema";
import { CoreBlogSchema } from "./schemas/CoreBlogSchema";
import { CoreBlogsCategorySchema } from "./schemas/CoreBlogsCategory";
import { CoreProductCategorySchema } from "./schemas/CoreProductCategorySchema";
import { CoreProductDetailsSchema } from "./schemas/CoreProductDetailsSchema";
import { CoreProductSchema } from "./schemas/CoreProductSchema";
import { InvoiceSchema } from "./schemas/InvoiceSchema";
import { TokenSchema } from "./schemas/TokenSchema";
import { UserSchema } from "./schemas/UserSchema";


export const AdminUser = getDBConnection().define("admin_user", AdminUserSchema, { timestamps: true, underscored: true })
export const User = getDBConnection().define("user", UserSchema, { timestamps: true, underscored: true })
export const Product = getDBConnection().define("core_product", CoreProductSchema, { timestamps: true, underscored: true })
export const ProductDetails = getDBConnection().define("core_products_detail", CoreProductDetailsSchema, { timestamps: true, underscored: true })
export const ProductCategory = getDBConnection().define("core_products_category", CoreProductCategorySchema, { timestamps: true, underscored: true })
export const Blog = getDBConnection().define("core_blog", CoreBlogSchema, { timestamps: true, underscored: true })
export const BlogCategory = getDBConnection().define("core_blogs_category", CoreBlogsCategorySchema, {timestamps: false})
export const Invoice = getDBConnection().define("invoice", InvoiceSchema, {timestamps: true, paranoid: true})
export const Token = getDBConnection().define("token", TokenSchema, { timestamps: true })


// relationship between product and product details table
Product.hasOne(ProductDetails, { foreignKey: "product_id" })
ProductDetails.hasOne(Product, { foreignKey: "product_id" })

// relationship between product category and product table
Product.hasOne(ProductCategory, { foreignKey: "category_name" })
ProductCategory.hasMany(Product, { foreignKey: "category" })