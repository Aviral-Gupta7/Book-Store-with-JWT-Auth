import Listing from "../models/listing.js";

export const addListing = async (req, res, next) => {
  const { booktitle, price, bookdescription, authorname, bookdisplayphoto } =
    req.body;
  const owner = req.user._id;
  if (
    !booktitle ||
    !authorname ||
    !bookdisplayphoto ||
    booktitle.trim() === "" ||
    authorname.trim() === "" ||
    bookdisplayphoto.trim() === ""
  ) {
    return res.status(400).json({ message: "Fill all the required Field" });
  }

  const newListing = new Listing({
    booktitle,
    price,
    bookdescription,
    authorname,
    bookdisplayphoto,
    owner,
  });

  try {
    await newListing.save();
    return res.status(201).json({ message: "Listing added successfully" });
  } catch (error) {
    return next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const userId = req.user._id;
  const listingId = req.params.listingid;

  if (!listingId)
    return res.status(400).json("Something went wrong, please try again later");

  try {
    const listingToDelete = await Listing.findById(listingId);
    if (!listingToDelete) return res.status(404).json("Listing not found");
    if (listingToDelete.owner.toString() !== userId.toString()) {
      return res
        .status(403)
        .json("You are not authorized to delete this listing");
    }
    await Listing.findByIdAndDelete(listingId);
    return res.status(200).json("Listing deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const updateListing = async (req, res, next) => {
  const userId = req.user._id;
  const listingId = req.params.listingid;
  const { booktitle, price, bookdescription, authorname, bookdisplayphoto } =
    req.body;
  if (!listingId)
    return res.status(400).json("Something went wrong, please try again later");

  try {
    const listingToDelete = await Listing.findById(listingId);
    if (!listingToDelete) return res.status(404).json("Listing not found");
    if (listingToDelete.owner.toString() !== userId.toString()) {
      return res
        .status(403)
        .json("You are not authorized to Update this listing");
    }
    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      {
        $set: {
          booktitle,
          price,
          bookdescription,
          authorname,
          bookdisplayphoto,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (err) {
    next(err);
  }
};

export const getListing = async (req, res, next) => {
  Listing.find()
    .then((Listing) => res.json(Listing))
    .catch((err) => next(err));
};
