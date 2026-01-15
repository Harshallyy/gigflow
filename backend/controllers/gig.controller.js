import Gig from "../models/gig.js";

export const createGig = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.sendStatus(401);
    }

    await Gig.create({
      title: req.body.title,
      description: req.body.description,
      budget: req.body.budget,
      ownerId: req.user.id,
      status: "open",
    });

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

export const getGigs = async (req, res) => {
  try {
    const gigs = await Gig.find({ status: "open" });
    res.json(gigs);
  } catch (err) {
    res.sendStatus(500);
  }
};
