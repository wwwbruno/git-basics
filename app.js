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
 				command: 'git help [command]',
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
 				command: 'git diff [--options]',
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
 				command: 'git reset [--options]',
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
 				]
 			},
 		];
	});

})();