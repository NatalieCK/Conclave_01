hello world from joeio

4/4 TOM - After collaborating on a list of router views and components my INTENTION was to produce a component heirarchy diagram to aid planning and production.

5/4 TOM - OUTCOME - I generated a component heirarchy for the main 'postfeed' page. Feeling some confusion over router pages and their relationship with components - I did some revision then produced a diagram of router pages for the project which showed their relationships and url assignments. INTENTION - To revise Github, then build the router background elements for the group project. And to build the wait animation (loading) component too.

6/4 TOM - OUTCOME - Got the router pages code done, and familiarised myself with the Github process by building and merging the wait animation component while sharing with Joe who was also building a component. INTENTION - after problems began to emerge on our shared Github project it became evident that several of us were merging from the Main and it had become problematic with node modules. After looking into .gitignore I resolved to rebuild the repository transferring over existing work.

7/4 TOM - OUTCOME - Natalie offered to rebuild the repository instead so I stepped back from that. INTENTION - to map out schemas for our project and revise front/back communication.

8/4 TOM - OUTCOME I collaborated on schemas for User, Post, and Comments. After revising I locally built a backend utilizing these schemas and a frontend to test their interaction with Mongo database. There were problems. INTENTION - to resolve the problems existing in the front/back end code, merge the results into the group repository and begin utilizing this in building components for the project.

11/4 TOM - OUTCOME We had a fruitful collaboration while I shared the  backend I had built and we managed to resolve the problems. We merged it into the respository. I built 3 local frontend projects (one for each schema) which served as a template for frontend code to interact with the database, and also as a way to enter data into it which would be useful in building the project. I entered a range of users and posts for this purpose - taking the info from interviews and reddit posts about the 'speakers'. I posted these projects in the group thread for my team mates. As I began to look at building the 'postfeed' 2 things occured to me. A - that the app.vue needed to be set up as a clean slate with some global styling so that members could woork on their views and components and see the results locally. And B - that it would be more efficient to include relevant user data in the post and comments schema. To this end I created updated schema lists. I then reconfigured the component roadmap for the 'home' view and then built a similar roadmap for the 'FullArticle' view. INTENTION - to present my updated approach to my team, update the backend on the repository, clean up and style app.vue, then rebuild the frontend tools accordingly.

12/4 TOM - OUTCOME The team agreed with my changes, so I used the tools to delete the existing data in the database, and then we updated the schemas on the repository. We sorted out app.vue and agreed upon a state which we would leave it each time we merged our branches. I was unsure of how to handle the 'Current User' data and asked Utku if there was a global variable in Vue - he looked into it and returned with the 'provide/inject' option. I rebuilt and tested the frontend tools/templates and posted them for the group. In doing so I realized there were some tweaks we still had to make to the schemas (data definitions). INTENTION - to update the schemas on the repository, recreate a bunch of users and posts for the database, investigate 'provide/inject', and get the construction of the PostList component underway.

13/4 TOM - OUTCOME I deleted the existing posts on the database, we updated the schemas, and I re-entered the posts (to aid postList construction). I built the PostList component and got it functioning from the database. I left the provide/inject to team members (Natalie and Joy) dealing with The signup/login process for the meantime. I started developing the WritePost component, beginning with building a getUser function to get the user details of 'Current User' based on a user ID (to be provided by provide/inject) - I got this part working. INTENTION - To finish buiding the WritePost component, get it sending posts to the database. Then start work on the FullArticle view page by investigating sending selected post data to the new view. To investigate a way to reverse the order that posts were being displayed via the v-for loop (so that the most recent posts displayed first instead of last)

14/4 TOM - OUTCOME I found code to reverse the order of the postList and implemented it. I got the WritePost component functional and styled. When putting the Home view elements (HomeNav, WriePost, Postlist) together on the Home view I had some concerns about the vertical real estate of the page - considering the range of mobile formats. I was frustrated in my attempts to link to the FullArticle view while carrying the selected post data to it. Given the short time we have left I wonder if it would be best to abandon the 'FullArticle' view idea and have the interactivity and comments with the Posts on the Home view. INTENTION - To discuss possible solutions for dealing with the vertical real estate issue. To discuss the possibilty of abandoning the FullArticle approach. To move forward on adding interactivity ( update, delete ) and comments to the posts in whatever format is deemed best.

15/5 TOM - OUTCOME The team agreed to abandon the FullArticle approach and restyle elements to conserve vertical space. I added delete, like and 'add comment' buttons to the Post component. I wrote functions for the component to communicate with the backend (Delete and Put). I built a WriteComment component with associated post function. I built a Comment component with associated delete and put(likes) functions. I began exploration of how to display the comments associated to a post by way of an attached array (of comment ids). INTENTION - To resolve the method of comment attachment and display. To get the comments system functional. To add the glocal variable system for the current user (being investigated by Natalie) to the WritePost and WriteComment components. To begin work on my documentation.


5/4 NATALIE - Collaboratively finalising deisgn work, as well as collaborative planning for code development.

6/4 NATALIE - created new project folder collaboratively with the group, making sure file structure was accurate. Uploaded to github as a new repository. 

7/4 NATALIE - Had some issues with the github folder and access etc, potentially as a result of someone working on the main. I recreated our group project folder from scratch and uploaded as a new repository on github. 

8/4 - NATALIE collaboratively create schemas for code reference. General project preparation, research/ revision and practice. Preparing to make front and back end creation possible. 


11/4 NATALIE - Collaboratively troubleshooting github/ folder issues and tidied up the folder structure via videocall. Troubleshooted & resolved github issues with tutor. Main issue was git ignore not functioning, related to earlier issues. I deleted all the node mudles on my end then merged again. At this point, we made sure git ignore was functioning (which it was). All further node modules installed where therefor ignored and the issue fully resolved

12/4 NATALIE - Started to develop funtionality on earlier pages. Got advice on tutor on how to implement provide/ inject, extracting user data from the sign up form and providing it to the parent 'app.vue', so that it could be injected into child and grandchild pages. Began work connecting all pages via router view. In both actions, working to achieve base functionality on assigned pages of 'welcome', 'signup' and 'login'


13/4 NATALIE - continued working towards linking pages via router view. Tom had already developed the index.js, so I discussed and developed this collaboratively with him. Had some issues with the 'welcome' modal becoming hidden, but troubleshooted with the group. Router view was functional. 
Tried alternative method suggested for injecting information suggested, but wasn't successful so went back to method developed Tuesday. Managed to get feedback of user data on signup and login functional using inject. Communicated with Joy who was managing the styling of these pages, working closely to make sure our changes and merges were aligning. 

14/4 NATALIE - Worked on styling for earlier pages and troubleshooted the 'aboutconclave' page with Joy (modal display). Making provide/ inject functional on writepost. 
Discussing home page post and comments functionality, brainstorming this functionality with team. Got feedback from tutor also. Tom to develop. 
Identified potential issies with provide/ inject that other teams were having. Working on local storage alternative in case of error. Successfully resolved & functional with local storage of user data on login, signup and writepost. 


JOE D
2022-04-05 Vue and git study. 

2022-04-06 Built avatar prototype code and tested branch merging w Tom, struggled with github and committing node module changes to the main branch.

2022-04-07 Built dropdown prototype code with vue. Contributed to discussions on schema structures, studied component hierachy. 

2022-04-08 Unwell with headache. 

2022-04-10 Vue and javascript study.

2022-04-11 Collaborative group meeting and discussions re updating backend and rebuilding front end structures. Tom to progress. Build U_avatar, P_avatar and C_avatar - to be linked to database. Sketched a design for WritePost that was subsequently discarded due to Tom progressing that area of the home.vue. 
Intention - continue filling in the gaps and styling components. 

2022-04-12 Updated user, comment and post models according to group revisions. Merged avatars and styled homeNav, fullNav and dropdown from burger menu using toggle system. 
Intention - piece together greater understanding of front back end connection in order to better contribute. 

2022-04-13 Collaborative group discussion re critical coding phase of project. Nat and Tom taking leadership roles in major project components while Joy and I lead styling. Touched up full article nav bar after group discussions, designed and scripted a widemode component. Need to see Toms post structure to understand implementation of wide mode and full article structure. 
Intention - wait for Tom to complete key work before progressing. 

2022-04-14 Documentation day. Intention - touch up my components and there relationship to the total app tomorrow once Tom and Nat have done the bulk of their work and they commence on documentation. 


*JOY'S*
5/4 & 6/4 - Worked on learning Vue and colaborated with the group in deciding the router finalisations. Created all the folders and components we intended to use in the future as a team. Project planning.

7/4 - We as a team came together to refamiliarise ourselves with github and worked on tryng to fix issues during class time. We tried on creating group projects on different computers, we were able to later resolve this and the end of the day.

8/4 - I was away during this day but I was able to get all the styling assets into a folder/file for the others to use for extra hours work.

11/4 - We had a collaborative group meeting following along and trouble shooting Tom's/Nats router code. Also having issues with Git ignore/ nodes modules folders not creating. Tidying up the file formation and folders. Fixing issues with the others not being able to use the logos and fixing my computer terminal troubles.

12/4 - Began working on the Login/ SignUp/ Welcome vue pages. I began styling with welcome pages and helped trouble shoot the welome modal. Working closely with Natalie while she worked on the Injecting methods, I followed up her code with all the styling elements. Lots of team calling and helping in troubleshoot

13/4 - Helped in checking all pages were aligning, I was able to at the end of the day after the modals were fixed edit style elements. Editing components which needed fixing, eg Forms input dropdowns.

14/4 - Created an about page modal and having that functional within the login pages. Styling that also. Restyled the navigation.

15/4 - Worked on expand view, facing issues with trying to shunt down text this was later resolved with tutor help and Nat. Focused mainly on documentation and cleaning up code/components.

