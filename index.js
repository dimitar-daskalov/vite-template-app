#!/usr/bin/env node

import chalk from "chalk";
import { execSync } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import ora from "ora";

async function main() {
  console.log(chalk.blue.bold("🚀 Welcome to vite-template-app!"));

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What's your project name?",
      validate: (input) => (input ? true : "Project name cannot be empty."),
    },
  ]);

  console.log(chalk.magenta("\n🛠 Setting up your project...\n"));

  const repoUrl = "https://github.com/dimitar-daskalov/vite-template-app.git";

  const spinner = ora("📦 Cloning starter template...").start();

  try {
    execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "ignore" });
    process.chdir(projectName);
    fs.rmSync(".git", { recursive: true, force: true });
    spinner.succeed("Starter template cloned!");
  } catch (error) {
    spinner.fail("Failed to clone repository.");
    console.error(chalk.red(error));
    process.exit(1);
  }

  // Update package.json name
  const packageJsonPath = "./package.json";
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    packageJson.name = projectName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(chalk.green("📦 Updated package.json with project name."));
  }

  const installSpinner = ora("📦 Installing dependencies...").start();
  try {
    execSync("corepack enable", { stdio: "ignore" });
    execSync("yarn install", { stdio: "inherit" });
    installSpinner.succeed("Dependencies installed successfully!");
  } catch (error) {
    installSpinner.fail("Failed to install dependencies.");
    console.error(error);
    process.exit(1);
  }

  console.log(chalk.greenBright("\n✅ Project setup complete!"));
  console.log(chalk.blueBright(`👉 cd ${projectName}`));
  console.log(chalk.blueBright(`👉 yarn dev`));
}

main();
