# Front-End Stage 1 Task 🚀

This is the first challenge of the HNG 9 Frontend Track internship 🌐. 

HNG helps professionals become more proficient and job ready by a fast paced programme with projects mirroring real-work life scenarios.

## The Design 🎨

The design was in terms of a figma file having wireframes for both mobile and destop.

### My Process ⚔️

I have used plain css and my jsx is structured into the App > Main > Links & Footer. 

I have not applied the powers of react such as state and props. I have applied code splitting in my project. 

Mobile 📱

![](images/Screen%20Shot%202022-10-31%20at%2009.56.44.png)

### Deploying to github pages (Vite react app) 🙌

1. The project should be set in github with a github repo.
2. Go to vite.config.js and add a base url:
```
base : "/linktree-react/", //the repo name
plugins: [...whatever is here]
```

3. Run yarn run build or npm depending on your project. 
4. Add dist/ folder to git.

```

$ git add dist -f 
$ git commit -m "Adding dist"
$ git subtree push --prefix dist origin gh-pages


```

We are adding yet gitignoring the dist folder. 

If we go to the repo in github and we shall find it deployed. 