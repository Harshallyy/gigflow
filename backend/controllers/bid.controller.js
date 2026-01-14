import Bid from "../models/bid.js";
import Gig from "../models/gig.js";

export const createBid = async (req, res) => {
  await Bid.create({
    ...req.body,
    freelancerId: req.user.id,
  });
  res.sendStatus(201);
};

export const hireBid = async (req, res) => {
  const bid = await Bid.findById(req.params.bidId);
  await Gig.findByIdAndUpdate(bid.gigId, { status: "assigned" });
  await Bid.updateMany({ gigId: bid.gigId }, { status: "rejected" });
  bid.status = "hired";
  await bid.save();
  res.sendStatus(200);
};
