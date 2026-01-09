import "dotenv/config";
import { database } from "./index.ts";
import { tasks } from "./schema.ts";
const seedData = async () => {
  try {
    console.log("Starting database seeding...");

    // Clear existing tasks
    await database.delete(tasks);

    // Insert sample tasks
    const sampleTasks = [
      {
        title: "Complete project documentation",
        status: "todo" as const,
        priority: 1,
      },
      {
        title: "Review pull requests",
        status: "todo" as const,
        priority: 2,
      },
      {
        title: "Update dependencies",
        status: "done" as const,
        priority: 3,
      },
      {
        title: "Fix responsive design issues",
        status: "todo" as const,
        priority: 1,
      },
      {
        title: "Add unit tests for new features",
        status: "todo" as const,
        priority: 2,
      },
      {
        title: "Optimize database queries",
        status: "done" as const,
        priority: 3,
      },
      {
        title: "Implement authentication system",
        status: "todo" as const,
        priority: 1,
      },
      {
        title: "Set up CI/CD pipeline",
        status: "todo" as const,
        priority: 2,
      },
      {
        title: "Create deployment documentation",
        status: "done" as const,
        priority: 3,
      },
      {
        title: "Refactor legacy code",
        status: "todo" as const,
        priority: 3,
      },
    ];

    await database.insert(tasks).values(sampleTasks);
  } catch (error) {
    throw error;
  }
};

// Run the seeder
seedData()
  .then(() => {
    console.log("Database seeding completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  });

export { seedData };
