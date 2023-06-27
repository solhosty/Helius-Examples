##Helius Examples - Setup Guide

##Prerequisites
You'll need to have git installed to clone this repository. You'll also need Node.js (which comes with npm) installed on your computer to download the necessary packages.

##Steps to Install
Clone the Helius Examples repository. Open your terminal and run the following command:

git clone https://github.com/solhosty/Helius-Examples.git
Replace <username> with the name of the repository owner. This will download the repository to your local machine.

Navigate to the cloned repository's directory. After successfully cloning the repository, navigate into its directory by running:

cd HeliusExamples
Rename .envexample to .env. In the root directory of the project, you will find a file named .envexample. Rename this file to .env.

Add HELIUS_RPC_KEY to the .env file. Open the .env file with your preferred text editor and add the following line:

HELIUS_RPC_KEY=your_key_here
Replace your_key_here with your actual Helius RPC key. Save the changes and close the file.

Install the required Node packages. Still in the project root directory, run either of the following commands based on your package manager:
If you're using npm, type:

npm install
If you're using Yarn, type:

yarn add
This will install all the necessary Node packages for the project.

Congratulations, you have successfully set up the Helius Examples repository on your local machine!

