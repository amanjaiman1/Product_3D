# Contributing Guidelines to informatician

- We welcome all types of contributions, such as bug reports, feature requests, documentation improvements, code enhancements, and more.

# Installation

## To run the project locally, follow these steps:

1. Fork the project repository:

   - Go to the project repository on GitHub.
   - Click on the "Fork" button in the top-right corner of the page.

   ![image](https://github.com/Ayush-Tibrewal/Product_3D/assets/96817905/789dda31-5f38-4102-aca8-731d7f2f5f2f)

   - This will create a copy of the repository under your GitHub account.

2. Clone the forked repository to your local machine:

```
git clone https://github.com/amanjaiman1/Product_3D.git
```

This command will create a local copy of the project on your machine.

3.  Navigate to the project folder

```
cd Product_3D
```

4. Install dependencies

```
npm install
```

### :warning: 5. Steps for setting up the environment (Vite + React) :hammer_and_wrench:

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


<hr>

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


1. **Type**: The commit type must be one of the following:

   - `feat`: A new feature or enhancement.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., formatting, semicolons).
   - `refactor`: Code refactorings with no feature changes or bug fixes.
   - `test`: Adding or improving tests.
   - `chore`: General maintenance tasks, build changes, etc.

2. **Scope** (Optional): The scope provides context for the commit, indicating the specific part of the project being affected. Use a short description in lowercase (e.g., `auth`, `navbar`, `README`).

3. **Description**: A brief and meaningful description of the changes made. Start with a capital letter and use the imperative mood (e.g., "Add new feature" instead of "Added new feature").

4. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

### Examples:

#### Valid Commit Messages:

- `feat: Add user authentication feature`
- `fix(auth): Resolve login page redirect issue`
- `docs: Update installation instructions`
- `style: Format code according to project guidelines`
- `refactor(navbar): Improve responsiveness`
- `test: Add unit tests for API endpoints`
- `chore: Update dependencies to latest versions`
- `fix: Handle edge case in data processing (#456)`

#### Invalid Commit Messages:

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`
- `chore: fixed some stuff`

### Commit Example with Commitlint:

```bash
git commit -m "feat(auth): Implement user signup process (#789)"
```

<hr>



> Please adhere to this format when making commits. This will help us maintain a clean and organized commit history.

# Submitting Pull Requests

- After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

- Now fill in the form template of the pull request and give the necessary description.

- Click on **Submit**

- Hurray! You just made your first contribution to this project 🎉

- Wait for your pull request to be reviewed and merged.

# Guideline for issues

### Search for Existing Issues:

- Before creating a new issue, search the issue tracker to see if a similar problem or feature request has already been reported. Duplicates can clutter the tracker and make it harder to manage.

### Clear and Descriptive Titles:

- Use a clear and concise title that summarizes the problem or feature. Avoid ambiguous titles and be specific to help others understand the issue's content quickly.

### Detailed Description:

- Provide a detailed description of the issue, including steps to reproduce bugs, expected behavior, and any relevant information about the environment. For feature requests, explain the rationale and use cases.

### Code Samples and Images:

- When applicable, provide code samples, screenshots, or links to relevant sections of the codebase to better illustrate the problem.

### Formatting:

- Use Markdown or any supported formatting language to structure the issue description clearly. Bullet points, lists, and code blocks enhance readability.

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
