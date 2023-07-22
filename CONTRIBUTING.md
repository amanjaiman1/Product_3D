# Contributing Guidelines to informatician

- We welcome all types of contributions, such as bug reports, feature requests, documentation improvements, code enhancements, and more.

# Installation

## To run the project locally, follow these steps:

1. Clone the project repository:

```
git clone https://github.com/amanjaiman1/Product_3D.git
```

This command will create a local copy of the project on your machine.

2.  Navigate to the project folder

```
cd ProjectsHut
```

3. Install dependencies

```
npm install
```

### :warning: 4. Steps for setting up the environment (Vite + React) :hammer_and_wrench:

Please follow the instructions below carefully:

1️⃣ Environment Setup :

Find a file named ` .example.env`. This file serves as a template for the environment variables required to run the application. Make a copy of this file and rename it to `.env`in the same directory.

2️⃣ Adding Environment Variables :

Open the newly created `.env` file and update the values of the environment variables according to the platform we're working on (Vite + React). For example, you might need to set environment variables related to Firebase, API keys, or other configurations specific to our project.

Make sure to keep sensitive information, such as API keys and credentials, confidential and avoid committing them to the version control system.

3️⃣ Building the Project :

Once you've added the necessary environment variables, navigate to the `./client` directory in your terminal and run the following command to build the project:

`npm run build`

This command will generate the production-ready optimized build of our application.

4️⃣ Running the Project :

To start the development server and run the application locally, use the following command:

`npm run dev`

### Now go ahead and create a new branch and move to the branch

```
git checkout -b fix-issue-<ISSUE-NUMBER>
```

> **Note**: Replace `<ISSUE-NUMBER>` with the issue number you are working on

> Add new features or fix bugs according to your issue number

# To Push your changes

- `git status -s` (Shows the changed files)
- `git add --all` (Will add all the files to staging area)
- `git commit -m "feat/docs/fix: <EXPLAIN-YOUR_CHANGES>"`
- `git remote add upstream https://github.com/amanjaiman1/Product_3D`
- `git push origin fix-issue-<ISSUE-NUMBER>`

### Commit Message Format

- We follow the conventional commit message format to provide a clear and standardized history of our project's changes. Each commit message should consist of a type and a descriptive message.
  | Type | Heading | Rule | Description |
  | --------- | -------- | ----------------------------------------- | -------------------------------------------- |
  | ci | CI | Continuous Integration | Changes related to continuous integration. |
  | chore | Chore | Maintenance tasks | Other changes that don't affect production. |
  | docs | Docs | Documentation | Changes related to documentation. |
  | feat | Feature | New Feature | New feature implementations or additions. |
  | fix | Fix | Bug Fixes | Bug fixes or corrections. |
  | perf | Perf | Performance Improvements | Performance-related improvements. |
  | refactor | Refactor | Code Refactoring | Code changes that don't fix bugs or add features, but improve the code structure. |
  | revert | Revert | Revert Previous Commits | Reverting previous commits. |
  | style | Style | Code Formatting or Style | Changes related to code formatting or style. |
  | assets | Assets | Add or Update Assets (e.g., images, files) | Changes related to adding or updating assets, such as images or other files. |

> Please adhere to this format when making commits. This will help us maintain a clean and organized commit history.

# Submitting Pull Requests

- After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

- Now fill in the form template of the pull request and give the necessary description.

- Click on **Submit**

- Hurray! You just made your first contribution to this project 🎉

- Wait for your pull request to be reviewed and merged.

# Code Formatting and Style Guidelines

Consistent code formatting and style are important for maintaining a clean and readable codebase. Please adhere to the following guidelines when submitting code changes:

- Use spaces for indentation (4 spaces per level).
- Follow the established naming conventions for variables, functions, and classes.
- Write clear and concise comments to explain complex code sections.

# Communication

Effective communication is essential for maintaining a collaborative and inclusive environment. When participating in discussions, please:

- Be respectful and considerate towards others.
- Provide constructive feedback and suggestions.
- Clearly express your thoughts and ideas.
- Be open to different perspectives and opinions.

# How to Get Help

If you have any questions or need any help with Product3D, please feel free to join our `discussion forum`. We are happy to assist you with any issues or inquiries.

You can refer to the following articles on basics of Git and GitHub and also contact the Project Mentors, in case you are stuck:

- [Watch this video to get started, if you have no clue about open source](https://youtu.be/SYtPC9tHYyQ)
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)

By following these guidelines, we aim to create a welcoming community where everyone feels comfortable and empowered to contribute.

Thank you for your interest and support!
