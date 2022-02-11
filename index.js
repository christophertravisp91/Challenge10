const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern =require('./lib/Intern');
const htmlRender = require('./lib/htmlRenderer');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "Output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];