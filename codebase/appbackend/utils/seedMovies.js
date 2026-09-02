import connectdb from "../src/DB.js";
import dotenv from 'dotenv';
import { Movie } from "../models/movie.models.js";
import { hollywood100, bollywood100 } from "./moviesData.js";

dotenv.config({
  path: './.env'
});

// Import into DB
const importData = async () => {
  try {
    await connectdb();

    // Combine and deduplicate movies
    const combined = [...hollywood100, ...bollywood100];
    const uniqueMap = new Map();

    combined.forEach((movie) => {
      const normalizedTitle = movie.title.trim().toLowerCase();
      if (!uniqueMap.has(normalizedTitle)) {
        uniqueMap.set(normalizedTitle, {
          ...movie,
          averageRating: 0,
          reviewCount: 0
        });
      }
    });

    const moviesToInsert = Array.from(uniqueMap.values());
    console.log(`Prepared ${moviesToInsert.length} unique movies to seed (Hollywood: ${hollywood100.length}, Bollywood: ${bollywood100.length}).`);

    await Movie.deleteMany(); // Clear existing movies
    await Movie.insertMany(moviesToInsert);

    console.log(` Successfully seeded ${moviesToInsert.length} movies into MongoDB!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
};

// Delete data from DB
const deleteData = async () => {
  try {
    await connectdb();
    const res = await Movie.deleteMany();
    console.log(`Data Destroyed! Removed ${res.deletedCount} movies.`);
    process.exit(0);
  } catch (err) {
    console.error('Error deleting data:', err);
    process.exit(1);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Please use the -i flag to import data or -d to delete data.');
  process.exit(0);
}
