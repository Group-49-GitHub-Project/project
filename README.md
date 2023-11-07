# Welcome!

## Introduction:


In this project, you'll form groups of 3-5 students, and each member will create a personal web page, often referred to as an "About Me" page, to share fun and interesting information about themselves. If you're uncomfortable creating a personal page, you're also welcome to choose a different topic, ensuring it complies with university guidelines. 

The primary goal of this project is not to build a fancy website but to get hands-on experience with using Git and GitHub in a collaborative environment. You'll learn essential Git commands used by professionals and gain basic skills in creating a static web page using HTML, CSS, and some JavaScript. 

Your group will have the freedom to decide how to style your web pages. You can opt for simple CSS or explore other styling libraries like Styled Components, Tailwind CSS, or MUI to enhance the visual appeal.

## Please make sure that the information shared in the website is in accordance with University's policies.


#### OBJECTIVES:

- Develop proficiency in using GitHub and collaborating in a group environment.
- Acquire essential Git skills, including commands such as add, commit, status, branch, merge, push, and pull. You can refer to this [Git CheatSheet](http://git-cheatsheet.com/).
- Build a static website by applying HTML, CSS, and JavaScript.

## Steps to getting this project started:

1. Please set up Git and npm if you haven't already. 

    Check if you already have npm and node by running ```node -v``` and ```npm -v```. If not, please download npm and nodejs [HERE](https://nodejs.org/en/download/)

2. Each team will create a new GitHub organization. An organization will be a shared GitHub account that each team member can access.

    Follow the directions provided in this link. Please sign up for the free personal account.

         https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch

    Make sure to invite all team members to the new organization. 

3. Create an empty public repository in the teams organization. 

4. One team member will clone the Next.js website template to their local computer.

    In your terminal type:

    ``` git clone https://github.com/vedant29/Project-CSCI-1000 ```

    Then cd into the file website-template by typing:

    ``` cd Project-CSCI-1000 ```

    From here, you will set the git remote repository to the url generated when creating your team’s empty public repository.  

        The url looks something like this "https://github.com/your-account/newly-created-github-repository.git"

    In your terminal type: 

    ``` git remote set-url origin {repository url} ``` 

        It will look something like this(This url will be unique to each group):
    ``` git remote set-url origin https://github.com/your-account/newly-created-github-repository.git ```

    Check if the remote repository has been linked

    ``` git remote -v ``` 

    If you set the url correctly, you will see the origin pointing to the url:

    ``` origin  https://github.com/your-account/newly-created-github-repository.git (fetch) ```
    ``` origin  https://github.com/your-account/newly-created-github-repository.git (push)  ```
    
    Next type these two commands:

    ``` git branch -M main ```
    ``` git push -u origin main ```

    Now you should see the newly cloned project in the organization's repository. 

5. Each team member will clone the organization project repository to thier local computer.   

    ``` git clone https://github.com/your-account/newly-created-github-repository.git ```

    cd into project folder:
    
    ``` cd Project-CSCI-1000 ```

    Next, we want to install all the project dependencies by typing:
    
    ``` npm install ```
    
        If you dont have npm installed on your computer. Check out this website for instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

6. Now, you are ready to start working on the project.

    to host your website locally type this command:

    ``` npm run dev ```

    checkout http://localhost:3000 in your browser.

7. Now you all need to host your website on a platform. This can be done using Netlify. To host the website using Netlify's free version:

    Create a Netlify account or log in if you already have one.

    Click on "New site from Git" in your Netlify dashboard.
`
    Connect your GitHub account to Netlify.

    Choose the repository that contains your project. Switch to the organizations that you are a part of for this project.

    Configure the build settings (you can leave the default settings for a simple project).

    Click "Deploy" to build and deploy your website.

    Once the deployment is complete, your site will be live and accessible via a Netlify-generated URL.

    Please paste the link of your Netlify-generated URL in the comments of your <code> index.js </code> file.

Disclaimer -- Please make sure to collaborate with your team and always run git pull before working on a new feature. git pull will help ensure that you are working on the most updated code base of your project and help prevent merge errors in the future.