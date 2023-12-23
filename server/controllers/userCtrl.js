import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");

  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User created successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already exists" });
    throw new Error("User already exists");
  }
});

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email: email },
      select: {
        bookedVisits: true,
      },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "You already booked a visit for this residency" });
      throw new Error("You already booked a visit for this residency");
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id: id, date: date } },
        },
      });
      res.status(200).json({ message: "Visit booked successfully" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getBookedVisits = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email: email },
      select: {
        bookedVisits: true,
      },
    });
    res.status(200).json(bookings);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        bookedVisits: true,
      },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
      res.status(400).json({ message: "Visit not found" });
      throw new Error("Visit not found");
    } else {
      user.bookedVisits.splice(index, 1);

      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.status(200).send("Visit cancelled successfully");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const handleFavouriteResedinces = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (user.favResidenciesId.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email: email },
        data: {
          favResidenciesId: {
            set: user.favResidenciesId.filter((id) => rid !== id),
          },
        },
      });
      res.status(200).send({
        message: "Residency removed from favourites",
        user: updateUser,
      });
    } else {
      const updateUser = await prisma.user.update({
        where: { email: email },
        data: {
          favResidenciesId: {
            push: rid,
          },
        },
      });
      res.status(200).send({
        message: "Residency added to favourites",
        user: updateUser,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getAllFavourites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favResd = await prisma.user.findUnique({
      where: { email: email },
      select: {
        favResidenciesId: true,
      },
    });
    res.status(200).send(favResd);
  } catch (error) {
    throw new Error(error.message);
  }
});
