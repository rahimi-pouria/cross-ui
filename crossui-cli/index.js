#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import fsExtra from "fs-extra";
const { copySync, ensureDirSync } = fsExtra;
import { mkdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// --- Fix __dirname for ESM ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(chalk.green.bold("\nWelcome to CrossUI CLI!\n"));

// --- Copy all CrossUI folders ---
const copyAllFolders = (projectPath, isNew) => {
    const allFolders = ["components", "props", "docs", "boot", "utility", "composables"];
    allFolders.forEach(folder => {
        const sourcePath = join(__dirname, folder);
        const targetPath = join(projectPath, "src", folder);
        if (existsSync(sourcePath)) {
            ensureDirSync(targetPath);
            copySync(sourcePath, targetPath, { overwrite: isNew });
            console.log(chalk.green(`✅ Folder ${folder} copied to ${targetPath}`));
        }
    });
};

// --- Add CSS to React/Next ---
const addCssToReact = (projectPath, cssFramework) => {
    const appFile = join(projectPath, "src", "main.jsx");
    const indexFile = join(projectPath, "src", "index.jsx");
    let filePath = existsSync(appFile) ? appFile : (existsSync(indexFile) ? indexFile : null);
    if (!filePath) return;

    let content = readFileSync(filePath, "utf8");
    if (cssFramework.toLowerCase() === "reactbootstrap" && !content.includes("bootstrap/dist/css/bootstrap.css")) {
        content = `import 'bootstrap/dist/css/bootstrap.css';\n` + content;
    }
    writeFileSync(filePath, content, "utf8");
    console.log(chalk.green(`✅ CSS Framework ${cssFramework} configured in React project!`));
};

// --- Add CSS to Vue/Nuxt ---
const addCssToVueNuxt = (framework, projectPath, cssFramework) => {
    if (framework === "Vue") {
        const mainPath = join(projectPath, "src", "main.ts");
        if (!existsSync(mainPath)) return;
        let mainContent = readFileSync(mainPath, "utf8");

        if (cssFramework.toLowerCase() === "bootstrapvue") {
            if (!mainContent.includes("bootstrap/dist/css/bootstrap.css")) mainContent = `import "bootstrap/dist/css/bootstrap.css";\n` + mainContent;
            if (!mainContent.includes("BootstrapVue")) {
                mainContent = `import BootstrapVueNext from 'bootstrap-vue-next';\n` + mainContent;
                mainContent = mainContent.replace(/createApp\(([^)]+)\)/, `const app = createApp($1)\napp.use(BootstrapVueNext)`);
            }
        }

        if (cssFramework.toLowerCase() === "element-plus") {
            if (!mainContent.includes("element-plus/dist/index.css")) mainContent = `import "element-plus/dist/index.css";\n` + mainContent;
            if (!mainContent.includes("ElementPlus")) {
                mainContent = `import ElementPlus from 'element-plus';\n` + mainContent;
                mainContent = mainContent.replace(/createApp\(([^)]+)\)/, `const app = createApp($1)\napp.use(ElementPlus)`);
            }
        }

        writeFileSync(mainPath, mainContent, "utf8");
        console.log(chalk.green(`✅ CSS Framework ${cssFramework} configured in main.ts!`));
    }

    if (framework === "Nuxt.js") {
        const nuxtConfigPath = join(projectPath, "nuxt.config.ts");
        if (!existsSync(nuxtConfigPath)) return;
        let configContent = readFileSync(nuxtConfigPath, "utf8");

        if (cssFramework.toLowerCase() === "bootstrapvue") {
            if (!configContent.includes("bootstrap/dist/css/bootstrap.css")) configContent = `import 'bootstrap/dist/css/bootstrap.css'\n` + configContent;
            if (!configContent.includes("BootstrapVue")) configContent = `import BootstrapVueNext from 'bootstrap-vue-next'\n` + configContent;
        }
        if (cssFramework.toLowerCase() === "element-plus") {
            if (!configContent.includes("element-plus/dist/index.css")) configContent = `import 'element-plus/dist/index.css'\n` + configContent;
            if (!configContent.includes("ElementPlus")) configContent = `import ElementPlus from 'element-plus'\n` + configContent;
        }

        writeFileSync(nuxtConfigPath, configContent, "utf8");
        console.log(chalk.green(`✅ CSS Framework ${cssFramework} configured in nuxt.config.ts!`));
    }
};

const main = async () => {
    const { projectMode } = await inquirer.prompt([{
        type: "list",
        name: "projectMode",
        message: "Do you want to create a new project or add CrossUI to an existing one?",
        choices: [
            { name: "Create a new project from scratch", value: "new" },
            { name: "Add CrossUI to an existing project", value: "existing" }
        ]
    }]);

    let projectPath;
    const isNew = projectMode === "new";

    if (!isNew) {
        const { existingPath } = await inquirer.prompt([{
            type: "input",
            name: "existingPath",
            message: "Enter the path of your existing project:",
            default: process.cwd()
        }]);
        projectPath = existingPath;
        console.log(chalk.yellow(`\n📁 Using existing project at: ${projectPath}\n`));
    } else {
        const { projectName } = await inquirer.prompt([{
            type: "input",
            name: "projectName",
            message: "Enter a name for your new project:",
            default: "my-crossui-app"
        }]);
        projectPath = join(process.cwd(), projectName);
        if (!existsSync(projectPath)) mkdirSync(projectPath);
        console.log(chalk.green(`\n📁 New project folder: ${projectPath}\n`));
    }

    // --- Copy all CrossUI folders first ---
    copyAllFolders(projectPath, isNew);

    const { framework } = await inquirer.prompt([{
        type: "list",
        name: "framework",
        message: "Which JavaScript framework do you want to use?",
        choices: ["React", "Next.js", "Vue", "Nuxt.js"]
    }]);

    const cssChoices = framework === "React" || framework === "Next.js"
        ? ["reactBootstrap", "materialUI"]
        : ["bootstrapVue", "element-plus"];

    const { cssFramework } = await inquirer.prompt([{
        type: "list",
        name: "cssFramework",
        message: "Which CSS framework do you want to use?",
        choices: cssChoices
    }]);

    process.chdir(projectPath);

    try {
        // --- Project setup ---
        switch (framework) {
            case "React": execSync("npm create vite@latest . -- --template react", { stdio: "inherit" }); break;
            case "Next.js": execSync("npx create-next-app@latest .", { stdio: "inherit" }); break;
            case "Vue": execSync("npm create vite@latest . -- --template vue", { stdio: "inherit" }); break;
            case "Nuxt.js": execSync("npx nuxi init .", { stdio: "inherit" }); break;
        }
        console.log(chalk.green(`\n✅ ${framework} project setup done!\n`));

        // --- Install CSS packages ---
        switch (cssFramework.toLowerCase()) {
            case "reactbootstrap": execSync("npm install react-bootstrap bootstrap react-icons bootstrap-icons", { stdio: "inherit" }); break;
            case "materialui": execSync("npm install @mui/material @emotion/react @emotion/styled @mui/icons-material", { stdio: "inherit" }); break;
            case "bootstrapvue": execSync("npm install bootstrap bootstrap-vue-next bootstrap-icons", { stdio: "inherit" }); break;
            case "element-plus": execSync("npm install element-plus @element-plus/icons-vue", { stdio: "inherit" }); break;
        }

        // --- Install dependencies ---
        const depMap = {
            "React": ["swiper", "zod", "axios", "sweetalert2", "typescript", "@reduxjs/toolkit", "react-redux"],
            "Next.js": ["swiper", "zod", "axios", "sweetalert2", "typescript", "@reduxjs/toolkit", "react-redux"],
            "Vue": ["@vuelidate/core", "@vuelidate/validators", "pinia", "swiper", "axios", "sweetalert2", "typescript"],
            "Nuxt.js": ["@vuelidate/core", "@vuelidate/validators", "pinia", "swiper", "axios", "sweetalert2", "typescript"]
        };
        execSync(`npm install ${depMap[framework].join(" ")}@latest`, { stdio: "inherit" });

        const devDepMap = {
            "React": ["eslint"],
            "Next.js": ["eslint"],
            "Vue": ["@types/vuelidate", "eslint", "sass", "sass-loader", "vue-i18n"],
            "Nuxt.js": ["@types/vuelidate", "eslint", "sass", "sass-loader", "vue-i18n"]
        };
        execSync(`npm install -D ${devDepMap[framework].join(" ")}@latest`, { stdio: "inherit" });

        // --- Configure CSS ---
        if (framework === "React" || framework === "Next.js") addCssToReact(projectPath, cssFramework);
        if (framework === "Vue" || framework === "Nuxt.js") addCssToVueNuxt(framework, projectPath, cssFramework);

        console.log(chalk.green.bold("\n🎉 CrossUI CLI setup complete!\n"));
    } catch (err) {
        console.log(chalk.red("\n❌ CLI setup failed."));
        console.error(err.message);
    }
};

main();
