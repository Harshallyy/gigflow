import Gig from "../models/gig.js";

export const createGig = async (req, res) => {
  await Gig.create({ ...req.body, ownerId: req.user.id });
  res.sendStatus(201);
};

export const getGigs = async (req, res) => {
  const gigs = await Gig.find({ status: "open" });
  res.json(gigs);
};
