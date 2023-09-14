import ProductModel from "../Models/ProductModel.js";
import UserModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

export const addProduct = async (req, res) => {
  try {
    const { name, price, image, category, token } = req.body;
    if (!name || !price || !image || !category || !token)
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory" });
    //  const token = localStorage.getItem("token")
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData)
      return res
        .status(400)
        .json({ success: false, message: "Token is not valid" });
    const userId = decodedData.userId;
    const user = await UserModel.findById(userId);
    // console.log(user)
    if (user?.role == "Seller") {
      const product = new ProductModel({
        name,
        image,
        price,
        category,
        userId,
      });
      await product.save();
      return res
        .status(200)
        .json({ success: true, message: "product added", product });
    }
      

    return res
      .status(404)
      .json({ success: false, message: "only seller can add product" });
  } catch (error) {
    return res.status(200).json({ success: true, message: error.message });
  }
};

export const allProducts = async (req, res) => {
  try {
    const allpro = await ProductModel.find({});
    console.log(allpro);
    if (!allpro)
      return res
        .status(404)
        .json({ success: false, message: "no products found" });

    return res.status(200).json({ success: true, products: allpro });
  } catch (error) {
    return res.status(500).json({ success: true, message: error.message });
  }
};
