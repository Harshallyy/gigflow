import Bid from "../models/bid.js";
import Gig from "../models/gig.js";

export const createBid = async (req, res) => {
  try {
    // safety: req.user check
    if (!req.user || !req.user.id) {
      return res.sendStatus(401);
    }

    await Bid.create({
      gigId: req.body.gigId,
      message: req.body.message,
      price: req.body.price,
      freelancerId: req.user.id,
      status: "pending",
    });

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

export const hireBid = async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.bidId);
    if (!bid) return res.sendStatus(404);

    // mark gig assigned
    await Gig.findByIdAndUpdate(bid.gigId, { status: "assigned" });

    // reject all OTHER bids
    await Bid.updateMany(
      { gigId: bid.gigId, _id: { $ne: bid._id } },
      { status: "rejected" }
    );

    // hire selected bid
    bid.status = "hired";
    await bid.save();

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
};
