(function() {

	var app = angular.module('gitBasics', []);

	app.controller('CommandController', function(){

 		this.title = 'Git Basics';
 		this.subtitle = 'Basic commands to use with Git';

 		this.basics = [
 			// git help
 			{
 				title: 'Help',
 				description: 'Get help for git commands',
 				command: 'git help',
 				commands: [
 					{
 						command: 'git help',
 						description: 'get general help'
 					},
 					{
 						command: 'git help config',
 						description: 'get help for config command'
 					},
 					{
 						command: 'git help commit',
 						description: 'get help for commit command'
 					}
 				]
 			},
 			// git init
 			{
 				title: 'Init',
 				description: 'Create a new git repo',
 				command: 'git init'
 			},
 			// git status
 			{
 				title: 'Status',
 				description: 'Show the modified files and file on stage and the actual branch',
 				command: 'git status'
 			},
 			// git diff
 			{
 				title: 'Diff',
 				description: 'Show the diff between files',
 				command: 'git diff',
 				commands: [
 					{
 						command: 'git diff',
 						description: "show all file's change from the last commit"
 					},
 					{
 						command: 'git diff file_name',
 						description: "show the file's change from the last commit"
 					},
 					{
 						command: 'git diff --staged',
 						description: "show all file's change on the stage"
 					}
 				]
 			},
 			// git reset
 			{
 				title: 'Reset',
 				description: 'Remove files from stage / undo changes / undo commits',
 				command: 'git reset',
 				commands: [
 					{
 						command: 'git reset file_name',
 						description: "remove file from stage"
 					},
 					{
 						command: 'git reset --soft HEAD^',
 						description: "undo last commit, but keep changes"
 					},
 					{
 						command: 'git reset --hard HEAD^',
 						description: "undo last commit, and discart changes"
 					}
 				]
 			},
 			// git add
 			{
 				title: 'Add',
 				description: 'Add files to stage',
 				command: 'git add',
 				commands: [
 					{
 						command: 'git add file_name',
 						description: 'add file_name to stage'
 					},
 					{
 						command: 'git add directory',
 						description: "add directory and all it's files/diretories to stage"
 					},
 					{
 						command: 'git add .',
 						description: 'add all changed files/directories to stage'
 					}
 				]
 			},
 			// git checkout
 			{
 				title: 'Checkout',
 				description: 'work with files history and switch branches',
 				command: 'git checkout',
 				commands: [
 					{
 						command: 'git checkout -- file_name',
 						description: "discart file's change on stage"
 					},
 					{
 						command: 'git checkout branch_name',
 						description: "switch to branch"
 					},
 					{
 						command: 'git checkout -b new-branch',
 						description: "create and switch to new-branch"
 					},
 				]
 			},
 			// git push
 			{
 				title: 'Push',
 				description: 'Send commits to remote repository',
 				command: 'git push',
 				commands: [
 					{
 						command: 'git push',
 						description: "send all commits from all tracking branches to the default remote repository"
 					},
 					{
 						command: 'git push origin master',
 						description: "send all commits to the 'origin' remote in the 'master' branch"
 					},
 					{
 						command: 'git push -u origin master',
 						description: "send all commits to the 'origin' remote in the 'master' branch and set it as default"
 					},
 				]
 			},
 			// git pull
 			{
 				title: 'Pull',
 				description: 'Get commits and branches from remote repository',
 				command: 'git pull',
 			},
 			// git branch
 			{
 				title: 'Branch',
 				description: 'Create, list and delete branches',
 				command: 'git branch',
 				commands: [
 					{
 						command: 'git branch --list',
 						description: "list all branches"
 					},
 					{
 						command: 'git branch new-branch',
 						description: "create a branch named new-branch"
 					},
 					{
 						command: 'git branch -d new-branch',
 						description: "delete the new-branch"
 					},
 				]
 			},
 			// git clone
 			{
 				title: 'Clone',
 				description: 'Clone a remote repository',
 				command: 'git clone',
 				commands: [
 					{
 						command: 'git clone git@github.com:wwwbruno/git-basics.git',
 						description: "clone this resposiory via ssh in a directory git-basics (need ssh key configured)"
 					},
 					{
 						command: 'git clone git@github.com:wwwbruno/git-basics.git new-directory',
 						description: "clone this resposiory via ssh in a directory new-directory (need ssh key configured)"
 					},
 					{
 						command: 'git clone https://github.com/wwwbruno/git-basics.git',
 						description: "clone this resposiory via https in a directory git-basics"
 					},
 					{
 						command: 'git clone https://github.com/wwwbruno/git-basics.git new-directory',
 						description: "clone this resposiory via https in a directory new-directory"
 					},
 				]
 			},
 		];
	});

})();