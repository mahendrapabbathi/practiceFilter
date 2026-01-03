import userModel from "../model/userModel.js";

// add to cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { itemId } = req.body;

    const user = await userModel.findById(userId);

    if (!user.cartData) user.cartData = {};

    user.cartData[itemId] = {
      quantity: (user.cartData[itemId]?.quantity || 0) + 1,
    };

    await user.save();

    res.json({ success: true, message: "Added to cart" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// increase item
export const increaseCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const { itemId } = req.body;

    const user = await userModel.findById(userId);

    if (!user.cartData[itemId]) user.cartData[itemId] = { quantity: 0 };

    user.cartData[itemId].quantity += 1;

    await user.save();

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// decrease item
export const decreaseCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const { itemId } = req.body;

    const user = await userModel.findById(userId);

    if (!user.cartData[itemId]) return res.json({ success: false, message: "Item not in cart" });

    if (user.cartData[itemId].quantity > 1) {
      user.cartData[itemId].quantity -= 1;
    } else {
      delete user.cartData[itemId];
    }

    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};



export const getUserCart = async (req,res) => {
    try {
        const user = await userModel.findById(req.userId);
    res.json({ success: true, cartData: user.cartData });
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}