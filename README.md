# TSH

Source code of the website of The Samariteens of Hyderabad.

Hosted at Firebase: [TSH | Home](https://tshhyd.page.link/web)


## License
[GNU GPLv3 License](http://www.gnu.org/licenses/gpl.html "The GNU General Public License v3.0 - GNU Project - Free Software Foundation")

## Dummy's Guide to Making Changes
1. Download and install [npm](https://www.npmjs.com/get-npm).
2. Open a terminal and install [Firebase CLI](https://firebase.google.com/docs/cli/):

       $ npm install -g firebase-tools

3. [Fork](https://github.com/blackk100/TSH/fork) the repository using [git](https://desktop.github.com/).
4. Make all changes to the website under ```/docs/```.
5. Change the current working directory of the terminal to that of the cloned repository.
6. Test your changes locally:

       $ firebase serve

7. [Create a pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) to merge changes into this repository.
8. Login into Firebase CLI (with the correct account) and deploy the changes:

       $ firebase login
       $ firebase deploy
