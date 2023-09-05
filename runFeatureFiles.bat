@echo off

:: Set the tag from the command line argument
SET TAG=%1

:: Navigate to the directory where your Node.js script is located
cd runFeatureFiles.js

:: Run the Node.js script with the specified tag
node runFeatureFiles.js %TAG%