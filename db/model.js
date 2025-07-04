import { DataTypes, Model } from 'sequelize'

import connectToDB from './db.js'
import util from 'util'

export const db = await connectToDB('postgresql:///melon_db')

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  },
  {
    modelName: 'user',
    sequelize: db
  }
)

export class Product extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

Product.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_id'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    colors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    modelName: 'product',
    sequelize: db,
    underscored: true
  }
)

await Product.sync()
