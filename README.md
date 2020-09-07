[![Donate](https://img.shields.io/badge/Donate-PayPal-orange.svg)](https://www.paypal.com/donate/?cmd=_donations&business=8UK2BZP2K8NSS)

# MongoDB University

## Overview
Courseware and solutions of problems from MongoDB University's classes that I've attended.

## Supporting the project
You can support the project by checking out our sponsor page. It takes only one click:

<a href="https://tracking.gitads.io/?repo=mongodb-university-classes">
    <img src="https://images.gitads.io/mongodb-university-classes" alt="GitAds"/>
</a>

## Structure
This repository is organized into different folders. Each folder represents a class that I've attended at MongoDB University. Each class  directory will contain a directory for each week of duration (each one with a different topic) plus one with the final exam and its solution. In each week folder you will find the following:

 - A zip file with the week's handouts and other courseware material.
 - A folder for each homework of the week. This folder will contain a README file with the problem statement and, if the solution requires the use of the Mongo shell, a Javascript file with the query used (you can test it by passing the Javascript file as an argument when opening the Mongo shell) or a Shell/Batch script.
 - You may also find a Batch and a Shell script called setup_db which will import the databases/collections used for the weekly exercises. In order to work, these scripts assumes that you already have a MongoDB instance running on localhost, that you have the MongoDB bin folder on system path and that the handouts zip have been unzipped on the same folder of the script.

## Contributions
Feel free to open an issue if you have any questions or other stuff related to this project that you want to share. Please DO NOT open an issue to ask for a question update. The solutions in this repository exist only for historical purposes so I won't update them even if the University courses change.
