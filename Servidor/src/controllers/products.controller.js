import Product from "../models/Product";

export const createProduct = async (req, res) => {
  const { name, price, image, stock, category, quantity } = req.body;

  const newProduct = new Product({ name, price, image, stock, category, quantity });

  const productSaved = await newProduct.save();

  // new Product created
  res.status(201).json({message: "Product Created", productSaved});

  console.log(req.body)
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({message: "Updated", updatedProduct});
  console.log(req.body)
};
export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(204).json();
};
